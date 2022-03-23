import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVSFi9iZU2Q4cQd5YaJQeqOyeIIedAdMM",
    authDomain: "project67-97534.firebaseapp.com",
    projectId: "project67-97534",
    storageBucket: "project67-97534.appspot.com",
    messagingSenderId: "752253003370",
    appId: "1:752253003370:web:49c06ee416e4e0a069cc13"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();