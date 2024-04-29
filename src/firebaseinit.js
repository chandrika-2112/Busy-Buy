// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLY_PyLTdQwufk11N1PSZt6AetDZWd6Nk",
  authDomain: "busybuy-a1deb.firebaseapp.com",
  projectId: "busybuy-a1deb",
  storageBucket: "busybuy-a1deb.appspot.com",
  messagingSenderId: "531850267751",
  appId: "1:531850267751:web:4eca6fcffdf4c72264d8c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};


