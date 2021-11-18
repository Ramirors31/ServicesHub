
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyAa1c9kPAaVRMYUicK6GKkL6Pagsis5gd4",

  authDomain: "services-hub-cf77a.firebaseapp.com",

  projectId: "services-hub-cf77a",

  storageBucket: "services-hub-cf77a.appspot.com",

  messagingSenderId: "33048691471",

  appId: "1:33048691471:web:1da06828b0da908c9f747a"

};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);



  //EXPORTAMOS MODULOS PARA LA BASE DE DATOS
  export {
    db
  }