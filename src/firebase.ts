import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDM4dmxS6BhD9dXlqarnHRCnOo_HSz4cn8",
  authDomain: "discord-clone-udemy-5bb94.firebaseapp.com",
  projectId: "discord-clone-udemy-5bb94",
  storageBucket: "discord-clone-udemy-5bb94.appspot.com",
  messagingSenderId: "537018561608",
  appId: "1:537018561608:web:1d110a19ce49c5fffc147d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
