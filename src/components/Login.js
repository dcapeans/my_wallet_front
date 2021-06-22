import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import Title from "./Title"
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <Container>
            <Title />
            <form>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
                <Button text={"Entrar"}/>
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

