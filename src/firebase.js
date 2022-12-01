// V9 firebase
// import { initializeApp } from "firebase";
// import { getFirestore} from "firebase/firestore";
// import { getAuth } from "firebase/auth";

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCcmpwAekYu1HP3_Y71L0BI7RyRJcUV1qA",
  authDomain: "linkedin-clone-2ec1c.firebaseapp.com",
  projectId: "linkedin-clone-2ec1c",
  storageBucket: "linkedin-clone-2ec1c.appspot.com",
  messagingSenderId: "152256702169",
  appId: "1:152256702169:web:4270b2fe7fbb27c6cb40c8"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


// connect database
// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
const db = app.firestore();

// connect authentication
const auth = firebase.auth();


export { db, auth};

