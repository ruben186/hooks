// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, signOut} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI9oF0rCZT_g1yE4LeMld2XuX9dV1Ti_w",
  authDomain: "rc-seguridad.firebaseapp.com",
  projectId: "rc-seguridad",
  storageBucket: "rc-seguridad.firebasestorage.app",
  messagingSenderId: "369399714509",
  appId: "1:369399714509:web:2b3d0a7596e34fe12bcf84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exportar auth y provider de Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); 

//Firestore
const db= getFirestore(app);
export {auth, googleProvider,db,signOut};