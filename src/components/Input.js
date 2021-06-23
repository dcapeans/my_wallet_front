import styled from "styled-components"

export default function Input({placeholder, type, setState, isLoading}){
    return (
        <StyledInput placeholder={placeholder} type={type} required onChange={setState} disabled={isLoading}/>
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
    font-size: 18px;

    &::placeholder{
        color: #000;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
    }
    &:focus{
        outline: none;
    }

`