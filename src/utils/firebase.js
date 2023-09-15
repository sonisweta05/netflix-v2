// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk7IyKkrIOubWh4rupUPSBgEIQFzKaI1o",
  authDomain: "netflixgpt-49646.firebaseapp.com",
  projectId: "netflixgpt-49646",
  storageBucket: "netflixgpt-49646.appspot.com",
  messagingSenderId: "166029372314",
  appId: "1:166029372314:web:e57931196ee63449b66823",
  measurementId: "G-P1N9LE9KD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();