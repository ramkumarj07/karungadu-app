import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmgXoFjV02ovknKLS95_Tnf1M9ycCfazk",
  authDomain: "senthilapp-45706.firebaseapp.com",
  projectId: "senthilapp-45706",
  storageBucket: "senthilapp-45706.firebasestorage.app",
  messagingSenderId: "345379579967",
  appId: "1:345379579967:web:01021c180652a6d6aab08a",
  measurementId: "G-RT5XCT5RLC"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Enter email & password ❌");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Success 🔥");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};