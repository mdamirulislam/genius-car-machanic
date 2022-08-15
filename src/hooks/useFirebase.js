import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeFirebase from './../pages/Login/Firebase/firebase.init';


initializeFirebase();

const useFirebase =()=>{
    const [user , setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle =()=>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result =>{
         setUser(result.user)
        })
        .finally(()=>setIsLoading(false))
    }
    const logOut =()=>{
        setIsLoading(true)
        signOut(auth)
        .then(
            setUser({})
        )
        .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
       const unsubscribed = onAuthStateChanged (auth, user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unsubscribed;
    },[])


    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading

    }
}

export default useFirebase;