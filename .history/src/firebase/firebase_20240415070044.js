// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDshXiM75lxprwGyqaYsS78F-3Piu3gDQc",
  authDomain: "weather-dashboard-44991.firebaseapp.com",
  projectId: "weather-dashboard-44991",
  storageBucket: "weather-dashboard-44991.appspot.com",
  messagingSenderId: "1098288668639",
  appId: "1:1098288668639:web:b4d993198b14b0d46e2e6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
