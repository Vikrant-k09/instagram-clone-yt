// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE3DakH2zbq5OEvYc1HyZ8n1F4TWZk7U8",
  authDomain: "instagram-a6299.firebaseapp.com",
  projectId: "instagram-a6299",
  storageBucket: "instagram-a6299.appspot.com",
  messagingSenderId: "469387994189",
  appId: "1:469387994189:web:e8d0f122d7823df2442804",
  measurementId: "G-MGF3T7T4NN"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
