import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDPjgTkxSZkUS_Ht3NYli2jEqFRQebEEIQ",
    authDomain: "coderreact-8e09d.firebaseapp.com",
    projectId: "coderreact-8e09d",
    storageBucket: "coderreact-8e09d.appspot.com",
    messagingSenderId: "439985825188",
    appId: "1:439985825188:web:44112b898307f51abf8d31"
  })

  export const getFirebase = () => {
      return app;
  }

  export function getFirestore(){
      return firebase.firestore(app)
  }