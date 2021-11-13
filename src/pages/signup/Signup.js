
import { useState } from 'react';
import { useSignup }  from "../../hooks/useSignup";
import styles from './Signup.module.css';

export default function Signup() {
  
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [displayName,setDisplayName] = useState('');
    const { error,isPending,signup } = useSignup();
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(email,password,displayName);
      signup(email,password,displayName);
    }
    return (
        <form className={styles['login-form']} onSubmit = {handleSubmit}>
            <h2>Sign Up</h2>
            <label>
                <span>Email:</span>
                <input 
                type="email" 
                onChange = {(e)=>setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>Nick Name:</span>
                <input 
                type="text" 
                onChange = {(e)=>setDisplayName(e.target.value)}
                value={displayName}
                />
            </label>
            
            <label>
                <span>Password:</span>
                <input
                type="password"
                onChange = {(e)=> setPassword(e.target.value)}
                value={password}
                />
            </label>
             {!isPending && <button type="submit" className="btn btn-primary">Submit</button>}
             {isPending && <button className="btn btn-default" disabled>Is pending....</button>}
             {error && <p>{error}</p>}
             
        </form>

    )
}
