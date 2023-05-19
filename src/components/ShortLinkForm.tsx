import styled from "styled-components";
import { Input, InputContainer } from "./Input";
import { Button, ButtonContainer } from "./Button";

export function ShortLinkForm({text}){
    return <FormContainer>
        <FormInput placeholder={"Links que cabem no bolso"}/>
        <FormButton>Encurtar Link</FormButton>
    </FormContainer>
}

const FormButton = styled(ButtonContainer)`
    margin: 0px 0px 0px 5.8%;
`
const FormInput = styled(InputContainer)`
    width:100%;
    max-width: 100%;
    margin-bottom: 0px;
`
export const FormContainer = styled.form`
   display:flex;
   align-items:center;
   justify-content:space-between;
   width:100%;
   max-width:1200px;
   @media (max-width:450px){
    flex-direction:column;
    button{
        margin-top: 15px;
    }
    input {
        ::placeholder{
            text-align:center;
        }
    }
   }
`