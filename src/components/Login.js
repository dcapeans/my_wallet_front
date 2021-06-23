import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import Title from "./Title"
import { Link } from 'react-router-dom'
import { useState } from "react"

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

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

const StyledLink = styled.a`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #fff;
    line-height: 17px;
    text-align: center;
`

