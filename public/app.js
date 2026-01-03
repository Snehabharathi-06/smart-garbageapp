// ================= FIREBASE IMPORTS =================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
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

// ================= INITIALIZE FIREBASE =================
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const provider = new GoogleAuthProvider();



// ================= REDIRECT FUNCTION =================
function redirectByRole(role) {
  if (role === "citizen") {
    window.location.href = "dashboardcitizen.html";
  } else if (role === "collector") {
    window.location.href = "dashboardcollector.html";
  } else if (role === "admin") {
    window.location.href = "dashboardadmin.html";
  } else {
    document.getElementById("message").innerText = "Invalid role";
  }
}

// ================= SIGN UP =================
window.signUp = function () {
  alert("SIGNUP FUNCTION STARTED");
  console.log("NEW SIGNUP FUNCTION RUNNING");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!role) {
    document.getElementById("message").innerText = "Please select a role";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const db = getDatabase();

      let userData = {
        email: user.email,
        role: role
      };

      // ✅ REALTIME DATABASE AUTO-INCREMENT
      if (role === "citizen") {
        const counterRef = ref(db, "meta/citizenCounter");

        const result = await runTransaction(counterRef, (current) => {
          return (current || 1000) + 1;
        });

        userData.citizenNumber = `CIT-${result.snapshot.val()}`;
      }

      await set(ref(db, "users/" + user.uid), userData);

      redirectByRole(role);
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
};




// ================= LOGIN =================
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      const dbRef = ref(database);
      get(child(dbRef, "users/" + user.uid))
        .then((snapshot) => {
          if (snapshot.exists()) {
            redirectByRole(snapshot.val().role);
          } else {
            document.getElementById("message").innerText = "Role not found in database";
          }
        });
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
};

// ================= GOOGLE LOGIN =================
window.googleLogin = function () {
  const selectedRole = document.getElementById("role").value || "citizen";

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const userRef = ref(database, "users/" + user.uid);

      get(userRef).then((snapshot) => {
        if (!snapshot.exists()) {
          set(userRef, {
            email: user.email,
            role: selectedRole
          });
          redirectByRole(selectedRole);
        } else {
          redirectByRole(snapshot.val().role);
        }
      });
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
};

// ================= LOGOUT =================
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};
