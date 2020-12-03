import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBQheCuD02L4_JGw7GgfE0tpmNDnO-MqWQ",
    authDomain: "motrona-4e449.firebaseapp.com",
    databaseURL: "https://motrona-4e449.firebaseio.com",
    projectId: "motrona-4e449",
    storageBucket: "motrona-4e449.appspot.com",
    messagingSenderId: "445984005484",
    appId: "1:445984005484:web:8b383f9ed4a2dea5c92749",
    measurementId: "G-9ZRCXBTNW4"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };