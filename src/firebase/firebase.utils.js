import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAXqTrw0O1uoa7teljy7DrAHcHEtby6bxQ",
  authDomain: "paladin-clothing-db.firebaseapp.com",
  projectId: "paladin-clothing-db",
  storageBucket: "paladin-clothing-db.appspot.com",
  messagingSenderId: "1035066395336",
  appId: "1:1035066395336:web:fd84216a9edea0a0f233fd",
  measurementId: "G-XWHGVZNH97",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
