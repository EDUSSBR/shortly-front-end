import styled from "styled-components";
import {  InputContainer } from "./Input";
import {  ButtonContainer } from "./Button";
import { Vortex } from "react-loader-spinner";

export function ShortLinkForm({link,linkErrorMessage, setLink, isLoadingLink, handleLinkCreation}) {

    return <>  
    <FormContainer>
    {linkErrorMessage?.length>0 && <ErrorMessageItem>{linkErrorMessage}</ErrorMessageItem>}
        <FormInput value={link} onChange={(e)=>setLink(e.target.value)}  placeholder={"Links que cabem no bolso"} />
        <FormButton isLoadingLink={isLoadingLink} disabled={isLoadingLink} type="submit" onClick={(e)=>handleLinkCreation(e)}>{isLoadingLink? <Vortex
    visible={true}
    height="30"
    width="30"
    ariaLabel="vortex-loading"
    wrapperClass="vortex-wrapper"
    wrapperStyle={{}}
    colors={['red', 'green', 'black', 'yellow', 'orange', 'purple']}
  />: "Encurtar Link"}</FormButton>
    </FormContainer>
    </>
}

const FormButton = styled(ButtonContainer)`
    margin: 0px 0px 0px 15px;
    background-color: ${({isLoadingLink})=> isLoadingLink ? 'white':"#5D9040" }
`
const ErrorMessageItem = styled.p`
    position: absolute;
    color:red;
    top:-20px;
    left:0;
    margin: 0px 0px 0px 5.8%;
`
const FormInput = styled(InputContainer)`
    width:100%;
    max-width: 100%;
    margin-bottom: 0px;
`

export const FormContainer = styled.form`
    position:relative;
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