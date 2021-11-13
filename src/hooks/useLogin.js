
import { useState,useEffect } from 'react';
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext} from "../hooks/useAuthContext";

export const useLogin = () =>{
 const [isCancelled, setIsCancelled] = useState(false);
 const [error,setError] = useState(null);
 const [isPending,setIsPending] = useState(false);
 const { dispatch} = useAuthContext();

 const login = async(email,password) =>{

     setError(null);
     setIsPending(false)
     try{
        const res = await  signInWithEmailAndPassword(auth,email,password);
        dispatch({type:"LOGIN",payload:res.user});

        if(!isCancelled){
            setError(null);
            setIsPending(false);
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
    return ()=> setIsCancelled(true);
},[])
 return{ error,isPending,login }
}