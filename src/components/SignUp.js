import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import Title from "./Title"
import { Link } from 'react-router-dom'

export default function SignUp(){
    return(
        <>
        <Title />
        <Container>
            <form>
                <Input placeholder="Nome" />
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
                <Input placeholder="Confirme a senha" />
                <Button text={"Entrar"}/>
            </form>
            <Link to="/">
                <StyledLink>Já tem uma conta? Entre agora!</StyledLink>
            </Link>
        </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

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