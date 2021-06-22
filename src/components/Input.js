import styled from "styled-components"

export default function Input({placeholder}){
    return (
        <StyledInput placeholder={placeholder}/>
    )
}

const StyledInput = styled.input`
    width: 326px;
    height: 58px;
    margin: 10px auto 0 auto;
    border-radius: 5px;
    background-color: #fff;
    border-style: none;
    padding-left: 15px;

    ::placeholder{
        color: #000;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;

    }

`