import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBXnFBQjIZrswVUiZYYRolEZLapXziEb5Y",
    authDomain: "crwn-db-aec52.firebaseapp.com",
    projectId: "crwn-db-aec52",
    storageBucket: "crwn-db-aec52.appspot.com",
    messagingSenderId: "520897630674",
    appId: "1:520897630674:web:b06524893441373706380b",
    measurementId: "G-QX72C3C4SW"
  };

firebase.initializeApp(firebaseConfig); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;