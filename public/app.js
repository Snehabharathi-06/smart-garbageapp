// ================= FIREBASE IMPORTS =================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

import {
  getDatabase,
  ref,
  set,
  get,
  runTransaction,
  child
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

// ================= FIREBASE CONFIG =================
const firebaseConfig = {
  apiKey: "AIzaSyAfF5WijTd9LbgqrIZDp3imRx36Aeg3OAg",
  authDomain: "smart-garbageapp.firebaseapp.com",
  databaseURL: "https://smart-garbageapp-default-rtdb.firebaseio.com",
  projectId: "smart-garbageapp",
  storageBucket: "smart-garbageapp.firebasestorage.app",
  messagingSenderId: "109287159774",
  appId: "1:109287159774:web:48233baca941db42f78f4f"
};

// ================= INIT =================
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const provider = new GoogleAuthProvider();

// ================= ROLE REDIRECT =================
function redirectByRole(role) {
  if (role === "citizen") {
    window.location.replace("dashboardcitizen.html");
  } else if (role === "collector") {
    window.location.replace("dashboardcollector.html");
  } else {
    window.location.replace("index.html");
  }
}

// ================= GOOGLE LOGIN (POPUP ONLY) =================
window.googleLogin = async function () {
  const role = document.getElementById("role").value || "citizen";
  localStorage.setItem("pendingRole", role);

  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.error(err);
    document.getElementById("message").innerText = err.message;
  }
};

// ================= AUTH STATE HANDLER =================
function generateCitizenId(uid) {
  return "CIT-" + uid.substring(0, 6).toUpperCase();
}
onAuthStateChanged(auth, async (user) => {
  if (!user) return;

  const pendingRole = localStorage.getItem("pendingRole");
  localStorage.removeItem("pendingRole");

  const userRef = ref(database, "users/" + user.uid);
  const snap = await get(userRef);

  // ✅ Decide role SAFELY
  let role = "citizen";
  if (snap.exists() && snap.val().role) {
    role = snap.val().role;
  } else if (pendingRole) {
    role = pendingRole;
  }

  // ✅ Build data to ensure citizenId
  const newData = {
    email: user.email,
    role: role
  };

  if (role === "citizen") {
    newData.citizenId = generateCitizenId(user.uid);
  }

  // ✅ Write if missing OR citizenId missing
  if (!snap.exists() || (role === "citizen" && !snap.val()?.citizenId)) {
    await set(userRef, {
      ...(snap.exists() ? snap.val() : {}),
      ...newData
    });
  }

  redirectByRole(role);
});


// ================= EMAIL LOGIN =================
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      get(child(ref(database), "users/" + cred.user.uid))
        .then((snap) => {
          if (snap.exists()) {
            redirectByRole(snap.val().role);
          }
        });
    })
    .catch(err => {
      document.getElementById("message").innerText = err.message;
    });
};

// ================= SIGN UP =================
window.signUp = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!role) {
    document.getElementById("message").innerText = "Select role";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (cred) => {
      await set(ref(database, "users/" + cred.user.uid), {
        email,
        role
      });
      redirectByRole(role);
    })
    .catch(err => {
      document.getElementById("message").innerText = err.message;
    });
};

// ================= LOGOUT =================
window.logout = function () {
  signOut(auth).then(() => {
    window.location.replace("index.html");
  });
};