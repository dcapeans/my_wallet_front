import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import GlobalStyle from '../styles/GlobalStyles'
import Home from './Home'
import NewRegister from './NewRegister'
import UserContext from '../contexts/UserContext'

export default function App() {
    const [user, setUser] = useState(null)

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <UserContext.provider value={{user, setUser}}>
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
                </UserContext.provider>
            </Switch>
        </BrowserRouter>  
    )
}