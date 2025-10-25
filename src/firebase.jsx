// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update, get, child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeIHZ9sXY90OsplMinoznnEy1CvD2NJ8c",
  authDomain: "zomato-clone-84905.firebaseapp.com",
  projectId: "zomato-clone-84905",
  storageBucket: "zomato-clone-84905.firebasestorage.app",
  messagingSenderId: "887023054037",
  appId: "1:887023054037:web:1fa3b29111937ab22b865c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase


// Initialize Firestore database
export const db = getDatabase(app);
export { ref, set, update, get, child };

