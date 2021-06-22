import styled from "styled-components"

export default function Button({text}){
    return(
        <StyledButton>{text}</StyledButton>
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
    margin-top: 10px;
`