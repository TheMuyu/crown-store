// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxXhbO1uoM105lSGfgurgvi-Kgho-DsYo",
  authDomain: "crown-db-35e68.firebaseapp.com",
  projectId: "crown-db-35e68",
  storageBucket: "crown-db-35e68.appspot.com",
  messagingSenderId: "246121121110",
  appId: "1:246121121110:web:f37edd962a733f403fc2f7",
  measurementId: "G-HBFNJG0HFX"
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

