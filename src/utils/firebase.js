import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUj2NCa6uvi8STDFGmoSAYxuthANuiHVQ",
  authDomain: "clone-d6aac.firebaseapp.com",
  projectId: "clone-d6aac",
  storageBucket: "clone-d6aac.appspot.com",
  messagingSenderId: "636872973722",
  appId: "1:636872973722:web:a57289b1b60c4d4766ae23",
  measurementId: "G-NYBRQHFXV5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
