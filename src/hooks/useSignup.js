import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState,useEffect } from "react"
import { auth } from '../firebase/config';
import { useAuthContext} from "../hooks/useAuthContext";


export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch} = useAuthContext();
    const signup = async(email,password,displayName)=>{
       setError(null);
       setIsPending(false);
       try{
            const res = await createUserWithEmailAndPassword(auth,email,password);
            if(!res){ 
                throw new Error("could not complete signUp")
            }
            console.log(" from useSignUp", res.user);
            //displayname to user
            await res.user.updateProfile({displayName});
            //dispatch login action
            dispatch({type:"LOGIN",payload:res.user});
            if(!isCancelled){
                setIsPending(false);
                setError(null);
            }
            
       }
       catch(err){
           if(!isCancelled){
            setError(err.message);
            setIsPending(false);
           }
           
       }
    }
    useEffect(()=>{
        return()=>setIsCancelled(true)
    },[])
    return { error, isPending, signup}
}