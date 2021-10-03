import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Dashboard from "./Dashboard";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from "./Login"
import Register from "./Register"
import PrivateRoute from './PrivateRoute'
import AuthDataProvider  from './auth-provider';

const App = () => {

    const options = {
        // you can also just use 'bottom center'
        position: 'top center',
        timeout: 5000,
        
      }


        return(
        <AuthDataProvider>
        <AlertProvider template={AlertTemplate} {...options}>
             
            <Router>
           
            <div>
           
                <Header />
                
                <div className="container">
                    <Switch>
                        <PrivateRoute exact path='/' component={Dashboard} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </div>
            
            </div>
            
            </Router>
            
        </AlertProvider>
        </AuthDataProvider>
        )


}
ReactDOM.render(<App/>, document.getElementById('app'));