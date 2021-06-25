import styled from "styled-components"
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import { useCallback, useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useHistory } from "react-router";
import Transaction from "./Transaction";
import Balance from './Balance'

export default function Home(){
    const [transactions, setTransactions] = useState([])
    const [balance, setBalance] = useState("")
    const { user } = useContext(UserContext)
    let history = useHistory()

    const fetchTransactions = useCallback(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        axios.get("http://localhost:4000/transactions", config)
        .then((res) => {
            setBalance(res.data.balanceTotal)
            setTransactions(res.data.transactions)
        })
        .catch((err) => {
            alert("Ocorreu um erro. Tente novamente")
        })
    }, [user.token])

    useEffect(() => {
       fetchTransactions()
    }, [fetchTransactions])

    const logout = () => {
        console.log(user)
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        axios.post("http://localhost:4000/logout", {}, config)
        .then((res) => {
            localStorage.clear()
            history.push("/")
        })
        .catch((err) => {
            alert("Ocorreu um erro. Tente novamente")
        }) 
    }

    return(
        <Container>
            <Header>
                <h2>Olá, {user.name}</h2>
                <RiLogoutBoxRLine className="logout_icon" onClick={logout}/>
            </Header>
            <Content>
            {transactions.length > 0 
                ? transactions.map((transaction, i) => (
                    <Transaction key={i} transaction={transaction}/>
                ))
                : <p>Não há registros de entrada ou saída</p>
            } 
            {transactions.length > 0
                ? <Balance balance={balance}/>
                : <span></span>
            } 
            </Content>
            <ButtonsContainer>
                <NewRegisterButton onClick={() =>{history.push("/newIncome")}}>
                    <BsPlusCircle className="newRegisterIcon"/>
                    <p>Nova entrada</p>
                </NewRegisterButton>
                <NewRegisterButton onClick={() =>{history.push("/newOutflow")}}>
                    <BsDashCircle className="newRegisterIcon"/>
                    <p>Nova saída</p>
                </NewRegisterButton>
            </ButtonsContainer>
        </Container>  
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    margin: 25px auto 0 auto;
    font-family:'Raleway', sans-serif;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    width: 100%;
    margin-bottom: 22px;
    h2 {
        font-size: 26px;
        font-weight: 700;
        line-height: 30px;
    }
    .logout_icon{
        font-size: 30px;
    }
`

const Content = styled.div`
    position: relative;
    background-color: #fff;
    color: #000;
    width: 100%;
    height: 446px;
    border-radius: 5px;
    padding: 15px 15px 0 15px;
    overflow-y: scroll;
    p {
        position: relative;
        top: 45%;
        margin: 0 auto;
        text-align: center;
        color: #868686;
        font-size: 20px;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 15px;
`

const NewRegisterButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 155px;
    height: 114px;
    background-color: #a328d6;
    color: #fff;
    border-style: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 700;
    padding: 12px;
    p{
        width: 50%;
        text-align: left;
    }
    .newRegisterIcon{
        font-size: 22px;
    }
`