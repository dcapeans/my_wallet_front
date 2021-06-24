import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import Title from "./Title"
import { Link, useHistory } from 'react-router-dom'
import { useState, useContext } from "react"
import axios from "axios"
import UserContext from '../contexts/UserContext'


export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { setUser } = useContext(UserContext)
    let history = useHistory()

    if(localStorage.getItem("user")){
        setUser(JSON.parse(localStorage.getItem("user")))
        history.push("/home")
    }

    const signIn = (e) => {
        e.preventDefault()
        const body = { email, password}

        setIsLoading(true)
        axios.post("http://localhost:4000/sign-in", body)
        .then((res) => {
            console.log(res)
            setUser(res.data)
            localStorage.setItem( "user", JSON.stringify(res.data))
            setIsLoading(false)
            history.push("/home")
        })
        .catch(() => {
            alert("Ocorreu um erro. Tente novamente")
            setIsLoading(false)
        })
    }

    return(
        <Container>
            <Title />
            <form onSubmit={signIn}>
                <Input isLoading={isLoading} type="text" placeholder="E-mail" setState={(e) => setEmail(e.target.value)}/>
                <Input isLoading={isLoading} type="password" placeholder="Senha" setState={(e) => setPassword(e.target.value)}/>
                <Button text={"Entrar"} isLoading={isLoading} type={"submit"}/>
            </form>
            <Link to="/signUp">
                <StyledLink>Primeira vez? Cadastre-se!</StyledLink>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;

    form{
        display: flex;
        flex-direction: column;
    }
`

const StyledLink = styled.button`
    background-color: transparent;
    border-style: none;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #fff;
    line-height: 17px;
    text-align: center;
`

