import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBgKEUExnkRqtCIOVktQKodEZD-rBXog8E",
  authDomain: "thedojosite-4188e.firebaseapp.com",
  projectId: "thedojosite-4188e",
  storageBucket: "thedojosite-4188e.appspot.com",
  messagingSenderId: "399131610287",
  appId: "1:399131610287:web:a71cd8754de841ce71d85a"
};

// init firabase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp};