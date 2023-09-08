// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4IUrAtBaluED61-3ydaUPeiyafaCJV3E",
  authDomain: "reactjs-53563.firebaseapp.com",
  projectId: "reactjs-53563",
  storageBucket: "reactjs-53563.appspot.com",
  messagingSenderId: "1033436026543",
  appId: "1:1033436026543:web:46091be6c967c0a36ea65a",
  measurementId: "G-D98Q0VHQ84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);