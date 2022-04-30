// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_jx_FDsaTFLschVHSYNneUOCE21cxWcs",
    authDomain: "ema-john-web-fa2bf.firebaseapp.com",
    projectId: "ema-john-web-fa2bf",
    storageBucket: "ema-john-web-fa2bf.appspot.com",
    messagingSenderId: "892082933372",
    appId: "1:892082933372:web:1458c95ac97aeb9d2183f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;