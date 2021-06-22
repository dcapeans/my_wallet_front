import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import GlobalStyle from '../styles/GlobalStyles'

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/signUp" exact>
                    <SignUp />
                </Route>
                <Route path="/home" exact>
                    
                </Route>
                <Route path="/income" exact>
                    
                </Route>
                <Route path="/outflow" exact>
                    
                </Route>
            </Switch>
        </BrowserRouter>  
    )
}