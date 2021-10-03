import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthDataContext } from './auth-provider';

const isLogin = ()=>{

    const token = localStorage.getItem('token') 
    if (token)
     return true
}


const PrivateRoute = ({ component: Component, ...rest }) => (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (isLogin() ? <Component {...props} /> :  
    <Redirect to="/login" />)} />                         
)


export default PrivateRoute;