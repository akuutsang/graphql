import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBpxZFsOsgTyTNAYsEoUhnb0s_n36f7pM",
  authDomain: "fir-react-auth-33710.firebaseapp.com",
  projectId: "fir-react-auth-33710",
  storageBucket: "fir-react-auth-33710.appspot.com",
  messagingSenderId: "497678984491",
  appId: "1:497678984491:web:2b6c1e9d6592a4dec5d16e",
  measurementId: "G-NKKVRCWHYC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
