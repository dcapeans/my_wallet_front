import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import Title from "./Title"

export default function Login(){
    return(
        <>
        <Title />
        <Container>
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
            <Button text={"Entrar"}/>
        </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

