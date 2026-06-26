// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVvB6qAac0vWyLEbXzkqgaJO_26KpyEwk",
  authDomain: "authbyn1n4d.firebaseapp.com",
  projectId: "authbyn1n4d",
  storageBucket: "authbyn1n4d.firebasestorage.app",
  messagingSenderId: "808364574944",
  appId: "1:808364574944:web:2c5db943348165fd13e885",
  measurementId: "G-2L7GHE31L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;