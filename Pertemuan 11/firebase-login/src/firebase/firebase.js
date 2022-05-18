import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXv2GCDrUmri0C8C2wlTnfbsSS9eFzSjU",
    authDomain: "fir-login-62589.firebaseapp.com",
    projectId: "fir-login-62589",
    storageBucket: "fir-login-62589.appspot.com",
    messagingSenderId: "482011159972",
    appId: "1:482011159972:web:8f86655406de830937f531",
    measurementId: "G-6ZFYGZ3KE2"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;