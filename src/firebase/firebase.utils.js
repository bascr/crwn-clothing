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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try { 
      await userRef.set({
        displayName,
        email, 
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;