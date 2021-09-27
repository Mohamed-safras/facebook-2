import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8x7mFKZg4WmNZfcTdTENVOEeIflC-Wqk",
  authDomain: "facebook-a5609.firebaseapp.com",
  projectId: "facebook-a5609",
  storageBucket: "facebook-a5609.appspot.com",
  messagingSenderId: "467286859642",
  appId: "1:467286859642:web:0a4d67951e4f0e1121c0c3",
  measurementId: "G-FC1VZ5RB3L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
