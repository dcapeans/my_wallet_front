import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import GlobalStyle from '../styles/GlobalStyles'
import Home from './Home'
import NewRegister from './NewRegister'

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
                    <Home />
                </Route>
                <Route path="/income" exact>
                    <NewRegister head="Nova entrada" buttonText="Salvar entrada"/>
                </Route>
                <Route path="/outflow" exact>
                    <NewRegister head="Nova saída" buttonText="Salvar saída"/>
                </Route>
            </Switch>
        </BrowserRouter>  
    )
}