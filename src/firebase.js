import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcmpwAekYu1HP3_Y71L0BI7RyRJcUV1qA",
  authDomain: "linkedin-clone-2ec1c.firebaseapp.com",
  projectId: "linkedin-clone-2ec1c",
  storageBucket: "linkedin-clone-2ec1c.appspot.com",
  messagingSenderId: "152256702169",
  appId: "1:152256702169:web:4270b2fe7fbb27c6cb40c8"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// connect database
const db = app.firestore();

// connect authentication
const auth = app.auth();


export { db, auth };

