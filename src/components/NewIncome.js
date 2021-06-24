import axios from "axios"
import { useContext, useState } from "react"
import { useHistory } from "react-router"
import styled from "styled-components"
import UserContext from "../contexts/UserContext"
import Button from "./Button"
import Input from "./Input"

export default function NewRegister(){
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const { user } = useContext(UserContext)
    let history = useHistory()

    const saveNewIncome = () => {
        const body = {
            value,
            description
        }
        const config = {
            headers: {
                Authorization: `Bearer ${user}`
            }
        }

        axios.post("http://localhost:4000/newIncome", body, config)
        .then((res) =>{
            resetInputs()
            history.push("/home")
        })
        .catch((err) => {
            alert("Ocorreu um erro. Tente novamente")
        })
    }

    const resetInputs = () => {
        setValue("")
        setDescription("")
    }

    const goHome = () => {
        history.push("/home")
    }

    return(
        <Container>
            <p>Nova entrada</p>
            <form onSubmit={saveNewIncome}>
                <Input placeholder="Valor" setState={(e) => setValue(e.target.value)}/>
                <Input placeholder="Descrição" setState={(e) => setDescription(e.target.value)}/>
                <Button type="submit" text={"Salvar entrada"} />
            </form>
            <BackButton onClick={goHome}>Voltar para Home</BackButton>
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

const BackButton = styled.button`
    border-style: none;
    background-color: transparent;
    color: #fff;
    font-size: 18px
`