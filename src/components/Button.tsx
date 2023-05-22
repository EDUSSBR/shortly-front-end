import styled from "styled-components";

export function Button({text, type="text", onClick, disabled}){
    return <ButtonContainer disabled={disabled} type={type} onClick={onClick}>{text}</ButtonContainer>
}

export const ButtonContainer = styled.button`
    width: 182px;
    height: 60px;
    border-radius: 12px;
    color:white;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    transition: all 0.2s linear;
    margin-top: 20px;
    background-color:#5D9040;
    border:none;
    :hover{
        color:#5D9040;
        border: 1px solid #5D9040;
        background-color:white;
    }
`