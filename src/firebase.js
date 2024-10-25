// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBc0rz09FBUZ6u_AIn5juV39Z1QiltqlYQ",
  authDomain: "person-resume.firebaseapp.com",
  projectId: "person-resume",
  storageBucket: "person-resume.appspot.com",
  messagingSenderId: "19572786860",
  appId: "1:19572786860:web:be2683f9412254c9494109",
  measurementId: "G-KY7BXHB1DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, auth, analytics, db };
