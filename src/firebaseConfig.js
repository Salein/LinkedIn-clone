// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJOUb7iRKRDBH07VVBeDPABMONvMGpt8U",
  authDomain: "linkedin-clone-2023-98967.firebaseapp.com",
  projectId: "linkedin-clone-2023-98967",
  storageBucket: "linkedin-clone-2023-98967.appspot.com",
  messagingSenderId: "149944955291",
  appId: "1:149944955291:web:5d8508407e57d2b7ad713e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth, app}