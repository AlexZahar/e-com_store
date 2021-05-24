import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDc3o8jci1f5ZHi7rnWGI6h33b6Qc0LvMM",
  authDomain: "crown-db-739f1.firebaseapp.com",
  projectId: "crown-db-739f1",
  storageBucket: "crown-db-739f1.appspot.com",
  messagingSenderId: "264515585643",
  appId: "1:264515585643:web:c6a78e12817a6a246e532e",
  measurementId: "G-DEW9QTB0NR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
