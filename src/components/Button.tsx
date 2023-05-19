import styled from "styled-components";

export function Button({text}){
    return <ButtonContainer>{text}</ButtonContainer>
}

export const ButtonContainer = styled.button`
    width: 182px;
    height: 60px;
    background-color:#5D9040;
    border-radius: 12px;
    border:none;
    color:white;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    transition: all 0.2s linear;
    margin-top: 20px;
    :hover{
        color:#5D9040;
        background-color:white;
    }
`