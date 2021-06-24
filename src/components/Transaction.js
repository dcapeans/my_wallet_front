import styled from "styled-components"
import dayjs from 'dayjs'

export default function Transaction({transaction}){
    const { type, value, transaction_date, description} = transaction
    return(
        <Container>
            <div>
                <span className="transaction_date">{dayjs(transaction_date).format("DD/MM")}</span>
                <span className="description">{description}</span>
            </div>
            <StyledValue type={type} >{(value/100).toFixed(2).replace(".", ",")}</StyledValue>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    margin-bottom: 20px;
    .transaction_date{
        color: #c6c6c6;
        margin-right: 15px; 
    }
`

const StyledValue = styled.span`
    color: ${props => props.type === "income" ? `green;` : `red;`}
`