import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"

export default function NewRegister({ head, buttonText}){
    return(
        <Container>
            <p>{head}</p>
            <form>
                <Input placeholder="Valor"/>
                <Input placeholder="Descrição"/>
                <Button text={buttonText} />
            </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 25px;
    p {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 26px;
        color: #fff;
        text-align: left;
        margin-bottom: 30px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`