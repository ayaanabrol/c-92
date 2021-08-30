import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCaeIyMlIYKrzPeYZVf08_d3seuXLmMaNM",
  authDomain: "bank-details-app.firebaseapp.com",
  projectId: "bank-details-app",
  storageBucket: "bank-details-app.appspot.com",
  messagingSenderId: "1077107090022",
  appId: "1:1077107090022:web:3f5fcd825ea3034c4ac3a7"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();