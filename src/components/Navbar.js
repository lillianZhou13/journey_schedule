import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

import styles from './Navbar.module.css'
import { useAuthContext } from '../hooks/useAuthContext'
import React from 'react'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  return (
    <div className={styles['bg-reef']}>
      <nav className={`navbar navbar-expand-md ${styles['nav-wrap']}`}>
        <div className="container">
          <Link className="navbar-brand" to="#">
            Brand
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mr-auto">
              {!user && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      SignUp
                    </Link>
                  </li>
                </>
              )}

              {user && (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/lists">
                      Lists
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/costs">
                      Costs
                    </Link>
                  </li>
                  <li className="nav-item" onClick={logout}>
                    <Link className="mx-3">
                      <em>Hello,{user.email}</em>
                      Log out
                    </Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
