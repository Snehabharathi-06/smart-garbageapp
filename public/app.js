// ================= FIREBASE IMPORTS =================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult
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

// ================= HANDLE GOOGLE REDIRECT RESULT =================
getRedirectResult(auth)
  .then(async (result) => {
    if (!result) return;

    const user = result.user;
    const role = localStorage.getItem("pendingRole") || "citizen";
    localStorage.removeItem("pendingRole");

    const userRef = ref(database, "users/" + user.uid);
    const snap = await get(userRef);

    if (!snap.exists()) {
      await set(userRef, {
        email: user.email,
        role: role
      });
      redirectByRole(role);
    } else {
      redirectByRole(snap.val().role);
    }
  })
  .catch((err) => {
    console.error(err);
    document.getElementById("message").innerText = err.message;
  });

// ================= GOOGLE LOGIN =================
window.googleLogin = async function () {
  const role = document.getElementById("role").value || "citizen";
  localStorage.setItem("pendingRole", role);

  const isLocal =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1";

  try {
    if (isLocal) {
      // ✅ LIVE SERVER → POPUP
      const { signInWithPopup } = await import(
        "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js"
      );

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = ref(database, "users/" + user.uid);
      const snap = await get(userRef);

      if (!snap.exists()) {
        await set(userRef, { email: user.email, role });
      }

      redirectByRole(role);
    } else {
      // ✅ DEPLOYED → REDIRECT
      signInWithRedirect(auth, provider);
    }
  } catch (err) {
    console.error(err);
    document.getElementById("message").innerText = err.message;
  }
};


// ================= EMAIL LOGIN =================
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      get(child(ref(database), "users/" + cred.user.uid))
        .then((snap) => {
          if (snap.exists()) redirectByRole(snap.val().role);
        });
    })
    .catch(err => {
      document.getElementById("message").innerText = err.message;
    });
};

// ================= SIGNUP =================
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
