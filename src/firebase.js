import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCmv0opNuCKCLWlHvodc2PX1JBSouDgj-M",
  authDomain: "newlinkedin-clone-5043b.firebaseapp.com",
  projectId: "newlinkedin-clone-5043b",
  storageBucket: "newlinkedin-clone-5043b.appspot.com",
  messagingSenderId: "726058981109",
  appId: "1:726058981109:web:4363de38b68ee3f513d7bc"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// connect database
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// connect authentication
const auth = getAuth(app);


export { db, auth, collection, addDoc };

