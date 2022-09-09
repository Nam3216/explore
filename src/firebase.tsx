import { initializeApp } from "firebase/app";

import {getFirestore} from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDryh0A9lKCFfGmRi9Kt_uz3saZYSJ2T8Q",
  authDomain: "space1-e5341.firebaseapp.com",
  projectId: "space1-e5341",
  storageBucket: "space1-e5341.appspot.com",
  messagingSenderId: "947751783849",
  appId: "1:947751783849:web:f2fd67b4f624f91dcf88b8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app)

export default db



