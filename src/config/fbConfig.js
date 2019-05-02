import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBdLmxQsQONJ4xBQrPPGB38Zwz5JjbBMjc",
    authDomain: "places-to-go-61dbc.firebaseapp.com",
    databaseURL: "https://places-to-go-61dbc.firebaseio.com",
    projectId: "places-to-go-61dbc",
    storageBucket: "places-to-go-61dbc.appspot.com",
    messagingSenderId: "974974834870"
  };
  firebase.initializeApp(config);
  firebase.firestore();

  export default firebase;