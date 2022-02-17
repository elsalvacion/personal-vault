import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import mainFirebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw58iCU0Y-w9S_013GjcrNI-pabRQUKeE",
  authDomain: "personal-vault-c3dbb.firebaseapp.com",
  projectId: "personal-vault-c3dbb",
  storageBucket: "personal-vault-c3dbb.appspot.com",
  messagingSenderId: "203189394809",
  appId: "1:203189394809:web:82b6d2251e8b2b153463a8",
};

const app = mainFirebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore();

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    mainFirebase.auth.GoogleAuthProvider.PROVIDER_ID,
    mainFirebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

const auth = mainFirebase.auth();

export { auth, StyledFirebaseAuth, uiConfig, app, storage, db, mainFirebase };
