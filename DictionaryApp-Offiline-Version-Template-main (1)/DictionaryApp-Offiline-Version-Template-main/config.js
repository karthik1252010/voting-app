import firebase from 'firebase';

var firebaseconfig =
const firebaseConfig = {
    apiKey: "AIzaSyCy5ACi0lcMTnf-a_266XipJYO3moTDTTI",
    authDomain: "voting-app-f7fc9.firebaseapp.com",
    databaseURL: "https://voting-app-f7fc9-default-rtdb.firebaseio.com",
    projectId: "voting-app-f7fc9",
    storageBucket: "voting-app-f7fc9.appspot.com",
    messagingSenderId: "770612611318",
    appId: "1:770612611318:web:cc2289c3080ce8921884d7"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.database();

