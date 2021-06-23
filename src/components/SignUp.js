import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import Title from "./Title"
import { Link, useHistory } from 'react-router-dom'
import { useState } from "react"
import axios from "axios"

export default function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    let history = useHistory()

    const signUp = (e) => {
        e.preventDefault()
        if(!name || !email || !password || password !== passwordConfirm){
            alert("Verifique os campos e tente novamente")
            return
        }
        const body = {
            name,
            email,
            password
        }
        setIsLoading(true)
        axios.post("http://localhost:4000/sign-up", body)
        .then(() => {
            setIsLoading(false)
            history.push("/")
        })
        .catch((err) => {
            console.log(err)
            alert("Ocorreu um erro ao se cadastrar. Tente novamente")
            setIsLoading(false)
        })

    }

    return(
        <Container>
            <Title />
            <form onSubmit={signUp}>
                <Input isLoading={isLoading} type="text" placeholder="Nome" setState={(e) => setName(e.target.value)} />
                <Input isLoading={isLoading} type="text" placeholder="E-mail" setState={(e) => setEmail(e.target.value)} />
                <Input isLoading={isLoading} type="password" placeholder="Senha" setState={(e) => setPassword(e.target.value)} />
                <Input isLoading={isLoading} type="password" placeholder="Confirme a senha" setState={(e) => setPasswordConfirm(e.target.value)} />
                <Button isLoading={isLoading} text={"Cadastrar"} type={"submit"}/>
            </form>
            <Link to="/">
                <StyledLink>Já tem uma conta? Entre agora!</StyledLink>
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