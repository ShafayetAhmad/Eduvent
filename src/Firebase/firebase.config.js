import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCgevGJZdjVLw_A5flD7R5ixjP1rDYWf2k",
  authDomain: "eduvent-ec381.firebaseapp.com",
  projectId: "eduvent-ec381",
  storageBucket: "eduvent-ec381.appspot.com",
  messagingSenderId: "1009892133397",
  appId: "1:1009892133397:web:b5a54adb8bf969ced51c1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;