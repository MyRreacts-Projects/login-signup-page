import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY5TeVMSyicPVIMp7IMlu4eu6ZJzRiYUw",
  authDomain: "loginsignup-page-f81e7.firebaseapp.com",
  projectId: "loginsignup-page-f81e7",
  storageBucket: "loginsignup-page-f81e7.firebasestorage.app",
  messagingSenderId: "314658488428",
  appId: "1:314658488428:web:c7f6abf72278a79f205849",
  measurementId: "G-25N1BK4SHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}
