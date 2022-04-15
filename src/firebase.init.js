// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC__oX1rMCE_HlhHDtsZwVfxU59XSXF8uA",
    authDomain: "genius-car-services-6b16c.firebaseapp.com",
    projectId: "genius-car-services-6b16c",
    storageBucket: "genius-car-services-6b16c.appspot.com",
    messagingSenderId: "352769582940",
    appId: "1:352769582940:web:ed9e6736daa302886e0399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;