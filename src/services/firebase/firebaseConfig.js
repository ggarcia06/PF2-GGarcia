import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBOJOZn7CgKFPVOVxh3Kko6daXLTxTQ5lQ",
    authDomain: "coder-garcia.firebaseapp.com",
    projectId: "coder-garcia",
    storageBucket: "coder-garcia.appspot.com",
    messagingSenderId: "915967273236",
    appId: "1:915967273236:web:19b40d1b341b8c32477a01"
  };

 const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app);