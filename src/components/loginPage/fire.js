import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from 'react-hot-toast';


const firebaseConfig = {
    apiKey: "AIzaSyDyu2rxTrC-4Aw1U0bWndzl5ncBIwWzZ4Y",
    authDomain: "movie-login-bac47.firebaseapp.com",
    projectId: "movie-login-bac47",
    storageBucket: "movie-login-bac47.appspot.com",
    messagingSenderId: "557765550020",
    appId: "1:557765550020:web:23e49ba104aa4b4951ce91"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const registerHandler = async (email , password) => {
  try{
    const {user} = await createUserWithEmailAndPassword(auth,email,password)
    toast.success("You Have Successfully Registered")

    return user
  }
  catch(error){
    toast.error(error.message)
  }
}

export const loginHandler = async (email , password) => {
  try{
    const {user} = await signInWithEmailAndPassword(auth,email,password)
    toast.success("You Have Successfully Signed In")
    return user
  }
  catch(error){
    toast.error(error.message)
  }
}

export const logOut = async () => {

  await signOut(auth)
  
  toast.success("You Have Successfully Signed Out")
  return true
}

export default app;