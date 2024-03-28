import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCylh8fraZlmWTqX7JRwAQCeIsk508Ue-0",
    authDomain: "udemy-music-2cccd.firebaseapp.com",
    projectId: "udemy-music-2cccd",
    storageBucket: "udemy-music-2cccd.appspot.com",
    messagingSenderId: "484364914251",
    appId: "1:484364914251:web:1585ba19f04aa47cadc7ce"
};

export default firebase.initializeApp(firebaseConfig);