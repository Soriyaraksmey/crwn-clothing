import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBhw0mQrNRmFWAS2qHW7dW6AvulKDCWxro",
  authDomain: "crwn-clothing-4e8b9.firebaseapp.com",
  databaseURL: "https://crwn-clothing-4e8b9.firebaseio.com",
  projectId: "crwn-clothing-4e8b9",
  storageBucket: "crwn-clothing-4e8b9.appspot.com",
  messagingSenderId: "1015473872090",
  appId: "1:1015473872090:web:3ff4728b6f4c2b5fb519e3",
  measurementId: "G-P48PCLL4F2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singinwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
