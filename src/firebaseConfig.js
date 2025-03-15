// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIIjDks5ipNVoDATUwvl5llgG5y4jbINk",
    authDomain: "dropx-7e14e.firebaseapp.com",
    databaseURL: "https://dropx-7e14e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dropx-7e14e",
    storageBucket: "dropx-7e14e.firebasestorage.app",
    messagingSenderId: "523892550059",
    appId: "1:523892550059:web:29082cead2cbbda51d8aee",
    measurementId: "G-27N49MBTJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initialize Realtime Database
const analytics = getAnalytics(app);

// Export the database
export { database };
