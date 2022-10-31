import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCoX9a_bQ2sFUBMgPChbFN1NbkwWossoA",
  authDomain: "chainraise-4256b.firebaseapp.com",
  projectId: "chainraise-4256b",
  storageBucket: "chainraise-4256b.appspot.com",
  messagingSenderId: "932002353769",
  appId: "1:932002353769:web:04a831375c50c521b388f8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((results) => {
      console.log(results);
    })
    .catch((err) => {
      console.log(err);
    });
};
