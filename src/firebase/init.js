import firebase from 'firebase'
import firestore from 'firabase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAwq9uVfwx0PNDMJhvNGovkRqUj6kj4_x0",
  authDomain: "geo-ninjas-d10f0.firebaseapp.com",
  databaseURL: "https://geo-ninjas-d10f0.firebaseio.com",
  projectId: "geo-ninjas-d10f0",
  storageBucket: "geo-ninjas-d10f0.appspot.com",
  messagingSenderId: "819619438613"
};

const firabaseApp = firebase.initializeApp(config);
export default firabaseApp.firestore();
