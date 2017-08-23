import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCO5U5AK7ItL7p1KknjbspQe1ZID_oQLmk",
  authDomain: "chatapp-6aacb.firebaseapp.com",
  databaseURL: "https://chatapp-6aacb.firebaseio.com",
  projectId: "chatapp-6aacb",
  storageBucket: "chatapp-6aacb.appspot.com",
  messagingSenderId: "1047836087520"
};

firebase.initializeApp(config);

export default firebase;