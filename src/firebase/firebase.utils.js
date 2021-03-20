import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyALLw_gn6RSMuWU4k_RMas-Z-0YUkmH0Oc",
    authDomain: "cwrn-db-e889c.firebaseapp.com",
    projectId: "cwrn-db-e889c",
    storageBucket: "cwrn-db-e889c.appspot.com",
    messagingSenderId: "631715603206",
    appId: "1:631715603206:web:b660dba3f5fb6c1b9cf487",
    measurementId: "G-VDBME5645Q"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
