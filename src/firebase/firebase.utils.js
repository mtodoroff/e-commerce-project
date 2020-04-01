import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCV_AWG2mPVPndimXYWwuuwJW9IRU2i0lw",
  authDomain: "e-commdb-33148.firebaseapp.com",
  databaseURL: "https://e-commdb-33148.firebaseio.com",
  projectId: "e-commdb-33148",
  storageBucket: "e-commdb-33148.appspot.com",
  messagingSenderId: "769978115808",
  appId: "1:769978115808:web:9a2ab0c3d64fe32e581285",
  measurementId: "G-Q5M5BXYEG1"
};

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

