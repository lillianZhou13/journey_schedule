
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');
    const { login,error,isPending } = useLogin();
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(token, username);
      login(username, token);
    }
    return (
        <form className={styles['login-form']} onSubmit = {handleSubmit}>
            <h2>Login with Token</h2>
            <label>
                <span>Username:</span>
                <input 
                type="text" 
                onChange = {(e)=>setUsername(e.target.value)}
                value={username}
                />
            </label>
            
            <label>
                <span>Token:</span>
                <input
                type="text"
                name="token"
                onChange = {(e)=> setToken(e.target.value)}
                value={token}
                />
            </label>
             {!isPending &&<button type="submit" className="btn btn-primary">Submit</button>}
             {isPending && <button className="btn" disabled>Loading...</button>}
             {error && <p>{error}</p>}
        </form>

    )
}
