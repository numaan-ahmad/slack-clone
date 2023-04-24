import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBk_qIs8Sat8Nhr_dqZtUknDaEiavWDzdg",
  authDomain: "slack-clone-2d405.firebaseapp.com",
  projectId: "slack-clone-2d405",
  storageBucket: "slack-clone-2d405.appspot.com",
  messagingSenderId: "756987311638",
  appId: "1:756987311638:web:6993ea117af655a9bde737",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
