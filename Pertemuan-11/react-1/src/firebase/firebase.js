import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyB1hkPxg7uH3QBNaYmAnqbcL4VdhouE6xc",
    authDomain: "prtm-11.firebaseapp.com",
    projectId: "prtm-11",
    storageBucket: "prtm-11.appspot.com",
    messagingSenderId: "594533345438",
    appId: "1:594533345438:web:b3af967d0348d79c48f38f",
    measurementId: "G-WV0X6WN8RN"

};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;