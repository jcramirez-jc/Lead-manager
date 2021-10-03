import React, { Component, useEffect, useState } from 'react'
import { Link  } from 'react-router-dom'
import { useAuthDataContext } from './auth-provider';

export default function Header() {

  const { handleLogout, checkingLogin, isLoggedIn, user} = useAuthDataContext();


  useEffect(() => {
    checkingLogin()
    //console.log(user)
  }, [])

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                      <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                          <a className="navbar-brand" href="#">Lead manager</a>
                          
                          <ul className="navbar-nav me-auto mb-5 mb-lg-0">

                            <li className="nav-item">
                              {user ? "" : <Link to='/register' className="nav-link">Register</Link>}
                            </li>
                        
                            <li className="nav-item">
                
                              { isLoggedIn ? <Link to="/login" onClick={handleLogout} className="nav-link">Logout</Link> : <Link to='/login' className="nav-link">Login</Link> }
                            </li>

                          </ul>
                          <span className="navbar-text mr-3">
                           <strong>{user ? `Welcome ${user}` : 'Welcome to Lead manager'}</strong>
                          </span>

                        </div>
                      </div>
                </nav>

  )
}
