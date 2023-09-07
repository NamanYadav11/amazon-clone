import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { 
    getAuth ,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,

} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDTkgtE1kU1D1h2nR0d9Ft7BtM5sCZFbcU",
    authDomain: "clone-baf51.firebaseapp.com",
    projectId: "clone-baf51",
    storageBucket: "clone-baf51.appspot.com",
    messagingSenderId: "408655124443",
    appId: "1:408655124443:web:dc3093d0379400e53a79fe",
    measurementId: "G-G6SSK5BK3L"
};

const firebaseApp=initializeApp(firebaseConfig)
const firebaseAuth=getAuth(firebaseApp)

const FirebaseContext=createContext(null);
const provider = new GoogleAuthProvider();



export const useFirebase=()=>useContext(FirebaseContext)


export const FirebaseProvider=(props)=>{
    const[userName,setUserName]=useState("")

    

    useEffect(()=>{
        firebaseAuth.onAuthStateChanged((user)=>{
            if(user){
                setUserName(user.displayName)
            }
            else{
                setUserName(null)
            }
        })
    },[])

    const SignupWithGoogle=()=>{
        return signInWithPopup(firebaseAuth,provider)
        .then((value)=>{
            console.log(value)})
        .catch((err)=>console.log(err))
    }
    

    const signupUserWithEmailAndPassword=(email,password,name)=>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password)

    }

    const signinUserWithEmailAndPassword=(email,password)=>{
        return signInWithEmailAndPassword(firebaseAuth,email,password)

    }
     
    const SignOutUser=()=>{

    }

    return(
        <FirebaseContext.Provider
            value={{
                signupUserWithEmailAndPassword,
                signinUserWithEmailAndPassword,
                SignupWithGoogle,
                SignOutUser,
                userName,
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}





