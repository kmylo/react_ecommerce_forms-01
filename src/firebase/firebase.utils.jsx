import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// authDomain: "mycrwn-db-1fe39.firebaseapp.com",
// authDomain: "163r8.csb.app",
// databaseURL: "https://mycrwn-db-1fe39.firebaseio.com",

const config = {
  apiKey: "AIzaSyCIh0d7O0MJRaJiXp_vBxxwBM-YdR6FbOU",
  authDomain: "mycrwn-db-1fe39.firebaseapp.com",
  databaseURL: "https://mycrwn-db-1fe39.firebaseio.com",
  projectId: "mycrwn-db-1fe39",
  storageBucket: "mycrwn-db-1fe39.appspot.com",
  messagingSenderId: "305046220015",
  appId: "1:305046220015:web:9c733253381080b1b93f1a",
  measurementId: "G-8HSM7SG7F6"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Get a reference to the place in the database where the user is stored
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }

  return getUserDocumentRef(userAuth.uid);
};

export const getUserDocumentRef = async uid => {
  if (!uid) return null;

  try {
    return firestore.doc(`users/${uid}`);
  } catch (error) {
    console.error("error fetching user", error.message);
  }
};

export default firebase;
