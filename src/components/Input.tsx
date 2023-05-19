import styled from "styled-components";

export function Input({placeholder}){
    return <InputContainer type={"text"} placeholder={placeholder}></InputContainer>
}

export const InputContainer = styled.input`
    width:100%;
    margin-bottom:25px;
    max-width: 769px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    color:#476e30;
    outline: none;
    transition: all 0.2s linear; 
    :active, :focus, :hover{
        outline: 1px solid #78B159;
    }
    :active{
        outline: 1px solid #78B159;
    }
    ::placeholder{
        color: #9C9C9C;
        padding-left:15px;
    }
`