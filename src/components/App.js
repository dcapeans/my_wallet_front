import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import GlobalStyle from '../styles/GlobalStyles'
import Home from './Home'
import NewOutflow from './NewOutflow'
import NewIncome from './NewIncome'
import UserContext from '../contexts/UserContext'
import PrivateRoute from './PrivateRoute'

export default function App() {
    const initialUserState = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

    const [user, setUser] = useState(initialUserState)
    
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <UserContext.Provider value={{user, setUser}}>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                    <Route path="/signUp" exact>
                        <SignUp />
                    </Route>
                    <PrivateRoute path={"/home"} component={Home} />
                    <PrivateRoute path={"/newIncome"} component={NewIncome} />
                    <PrivateRoute path={"/newOutflow"} component={NewOutflow} />
                </UserContext.Provider>
            </Switch>
        </BrowserRouter>  
    )
}