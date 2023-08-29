// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTkgtE1kU1D1h2nR0d9Ft7BtM5sCZFbcU",
  authDomain: "clone-baf51.firebaseapp.com",
  projectId: "clone-baf51",
  storageBucket: "clone-baf51.appspot.com",
  messagingSenderId: "408655124443",
  appId: "1:408655124443:web:dc3093d0379400e53a79fe",
  measurementId: "G-G6SSK5BK3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);