import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA2wom_KNPtDaoj-6ixej9W5EwnPyDiND4",
    authDomain: "expensify-bad61.firebaseapp.com",
    databaseURL: "https://expensify-bad61.firebaseio.com",
    projectId: "expensify-bad61",
    storageBucket: "expensify-bad61.appspot.com",
    messagingSenderId: "652557019608"
  };
  firebase.initializeApp(config);
   const database =firebase.database();

export {firebase,database as default};