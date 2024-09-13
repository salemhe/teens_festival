// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2mjVCG8T0UwuMrOuB4c6WlcMWmsXBa5w",
  authDomain: "teensfestival-1e62c.firebaseapp.com",
  projectId: "teensfestival-1e62c",
  storageBucket: "teensfestival-1e62c.appspot.com",
  messagingSenderId: "587967081715",
  appId: "1:587967081715:web:a3285bc38e6bb49ba71b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };