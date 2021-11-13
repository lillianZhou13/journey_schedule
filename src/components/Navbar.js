import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';


import styles from './Navbar.module.css';
import { useAuthContext } from '../hooks/useAuthContext';


export default function Navbar() {

    const { logout }  = useLogout();
    const { user } = useAuthContext();
    return (
        <nav className="navbar navbar-light navbar-expand-sm ">
            <div className="container">
                <Link className="navbar-brand" to="#">Brand</Link>
                <button className="navbar-toggler" type="button"  
                 data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                  <ul className="navbar-nav mr-auto">
                    { !user && 
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">SignUp</Link>
                        </li> 
                    </>}

                    {user && 
                        <li className="nav-item" onClick={logout}>
                            <em className="mx-3">Hello,{user.email}</em>
                            Logout
                        
                        </li> }
             </ul>
          </div>
        </div>
        </nav>
        
    )
}


 