import styled from "styled-components"

export default function Button({text, isLoading, type}){
    return(
        <StyledButton disabled={isLoading} type={type}>{text}</StyledButton>
    )
}

const StyledButton = styled.button`
    background-color: #A328D6;
    height: 46px;
    width: 326px;
    border-style: none;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 35px;
`