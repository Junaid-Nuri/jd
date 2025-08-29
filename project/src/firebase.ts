// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn-jhZ1bSqT1nGiA-dnZEuuoh0LpY4JCI",
  authDomain: "landing-pages-7c59c.firebaseapp.com",
  projectId: "landing-pages-7c59c",
  storageBucket: "landing-pages-7c59c.firebasestorage.app",
  messagingSenderId: "172977238683",
  appId: "1:172977238683:web:57fafbdb7e7363f104cc3e",
  measurementId: "G-6M12FL89BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Configure auth settings for phone authentication
auth.settings.appVerificationDisabledForTesting = false;

// Add test phone numbers for development
if (process.env.NODE_ENV === 'development') {
  // Enable test phone numbers
  auth.settings.appVerificationDisabledForTesting = true;
}

export { auth, app };