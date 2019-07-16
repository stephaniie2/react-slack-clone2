import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAeDdCHm4wFnvUrSiQMvFPCiPgjt0WGOH8",
  authDomain: "react-slack-clone-d5116.firebaseapp.com",
  databaseURL: "https://react-slack-clone-d5116.firebaseio.com",
  projectId: "react-slack-clone-d5116",
  storageBucket: "react-slack-clone-d5116.appspot.com",
  messagingSenderId: "430925178412",
  appId: "1:430925178412:web:675e692ca1974710"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
