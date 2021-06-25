import styled from "styled-components"

export default function Balance({balance}){

    return(
        <Container>
            <span>SALDO</span>
            <Value isPositive={balance > 0}>{(balance/100).toFixed(2).replace(".", ",")}</Value>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 480px;
    left: 25px;
    width: 85%;
    padding: 0 15px;
    height: 40px;
    font-size: 17px;
    background-color: #fff;
    span:first-child{
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
    }
`

const Value = styled.span`
    color: ${props => props.isPositive ? `green;` : `red;`};
    line-height: 20px;
`