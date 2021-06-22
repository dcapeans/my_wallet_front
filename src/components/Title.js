import styled from "styled-components"

export default function Title(){
    return(
        <StyledTitle>MyWallet</StyledTitle>
    )
}

const StyledTitle = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
    font-size: 32px;
    line-height: 50px;
`