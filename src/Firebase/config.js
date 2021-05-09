import firebase from "firebase/app"
import "firebase/database"

var firebaseConfig = {
    apiKey: "AIzaSyDHZBk6RXZco2tQoiaNCAb3gC9VMpFpM6k",
    authDomain: "retail-mart-94dec.firebaseapp.com",
    projectId: "retail-mart-94dec",
    storageBucket: "retail-mart-94dec.appspot.com",
    messagingSenderId: "283755080554",
    appId: "1:283755080554:web:e09bec78c419f5de905313"
  };

var fireDb = firebase.initializeApp(firebaseConfig);
var fire = fireDb.database().ref();
export default fire; 