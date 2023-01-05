import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAq0yJAqkqGWsAWOQ-6_fkQVPo3cWZXq0",
  authDomain: "final-84e19.firebaseapp.com",
  projectId: "final-84e19",
  storageBucket: "final-84e19.appspot.com",
  messagingSenderId: "558783023490",
  appId: "1:558783023490:web:3feea063c12c8ab406e79b"
};

if (!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig)
  }

  export { firebase };