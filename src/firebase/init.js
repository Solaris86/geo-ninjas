import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAdF1R_q8eo_1AfoNRX35PkoS5annwrcpg",
  authDomain: "geo-ninjas-d10f0.firebaseapp.com",
  databaseURL: "https://geo-ninjas-d10f0.firebaseio.com",
  projectId: "geo-ninjas-d10f0",
  storageBucket: "geo-ninjas-d10f0.appspot.com",
  messagingSenderId: "819619438613"
};

const firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore();
