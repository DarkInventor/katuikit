// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlxi0fTz7vlYgjP1vObrD8Lf9-GtldinQ",
    authDomain: "kat-ui.firebaseapp.com",
    projectId: "kat-ui",
    storageBucket: "kat-ui.appspot.com",
    messagingSenderId: "894602948422",
    appId: "1:894602948422:web:d906b66401dfdc29637f47",
    measurementId: "G-4RCEV3CH0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
export const db = getFirestore(app);