import { initializeApp } from "firebase/app";
import "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { setUser } from "./redux/userSlice";
import { store } from "./redux/store";

const firebaseConfig = {
  apiKey: "AIzaSyBvL4tI3xhLIYv7zf0TWx-ZR8F-NCNxOpE",
  authDomain: "lens-clone-5471a.firebaseapp.com",
  projectId: "lens-clone-5471a",
  storageBucket: "lens-clone-5471a.firebasestorage.app",
  messagingSenderId: "911588085951",
  appId: "1:911588085951:web:f185745a7f475c2e52760a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const { uid, displayName, email, photoURL } = result.user;

    store.dispatch(
      setUser({
        name: displayName,
        email: email,
        profilePicture: photoURL ?? null,
        isAuthenticated: true,
        uid: uid,
      })
    );
  } catch (error) {
    console.error(`Google sign-in error: ${error}`);
  }
};
