import styled from "styled-components"
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

export default function Home(){
    return(
        <Container>
            <Header>
                <h2>Olá, Fulano</h2>
                <RiLogoutBoxRLine className="logout_icon"/>
            </Header>
            <Content>
                <p>Não há registros de entrada ou saída</p>
            </Content>
            <ButtonsContainer>
                <NewRegisterButton>
                    <BsPlusCircle className="newRegisterIcon"/>
                    <p>Nova entrada</p>
                </NewRegisterButton>
                <NewRegisterButton>
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
    margin: 0 auto;
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
    background-color: #fff;
    color: #000;
    height: 446px;
    border-radius: 5px;
    padding: 10px;
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