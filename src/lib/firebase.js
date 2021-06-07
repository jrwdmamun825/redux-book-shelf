import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr-J1GlUEYleQyp4hAU-HPRSyowBLwEeo",
  authDomain: "book-shelf-25954.firebaseapp.com",
  projectId: "book-shelf-25954",
  storageBucket: "book-shelf-25954.appspot.com",
  messagingSenderId: "252852885479",
  appId: "1:252852885479:web:834abeb6aa826b1e11cf42"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
