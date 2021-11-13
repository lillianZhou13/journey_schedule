import { useState } from 'react';
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
//hooks

import { useAuthContext} from './useAuthContext';

export const useLogout=()=>{
  const [error,setError] = useState(null);
  const [isPending,setIsPending] = useState(false);
  const { dispatch} = useAuthContext();
  
  const logout = async() =>{
    setError(null);
    setIsPending(false);
    try{
      await signOut(auth)
      dispatch({ type:"LOGOUT"});
       setIsPending(false);
       setError(null);
      }
      catch(err){
       setError(err.message);
       setIsPending(false)
      }
  }
  return { error,isPending,logout }
 }
  
