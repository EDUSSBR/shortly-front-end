import styled, { keyframes } from 'styled-components'
import { Input } from '../src/components/Input'
import { Button } from '../src/components/Button'
import { useAccount } from '../src/hooks/useAccount'
import { Vortex } from 'react-loader-spinner'

export default function Cadastro({}) {
  const {name, email, password,confirmedPassword, setName, setEmail, setPassword, setConfirmedPassword, handleCreateAccount, isLoadingAccountCreation, createAccountError} = useAccount()

  return  <LoginContainer autocomplete="off">{isLoadingAccountCreation ? <Vortex
  visible={true}
  height="60"
  width="60"
  ariaLabel="vortex-loading"
  wrapperClass="vortex-wrapper"
  wrapperStyle={{marginBottom:190, marginTop:100}}
  colors={['red', 'green', 'black', 'yellow', 'orange', 'purple']}
/>:
(  <>  {createAccountError?.length>0 && createAccountError?.map(item=><ErrorMessage key={item}>{item}</ErrorMessage>) }
    <Input  placeholder={"Nome"} value={name} onChangeFunction={(e)=>setName(e.target.value)}/>
    <Input  placeholder={"E-mail"} value={email} onChangeFunction={(e)=>setEmail(e.target.value)}/>
    <Input  placeholder={"Senha"} type={"password"} value={password} onChangeFunction={(e)=>setPassword(e.target.value)}/>
    <Input  placeholder={"Confirmar senha"} type={"password"} value={confirmedPassword} onChangeFunction={(e)=>setConfirmedPassword(e.target.value)}/></>)}
    <Button disabled={isLoadingAccountCreation} type="submit" text={"Criar Conta"} onClick={(e)=>handleCreateAccount(e)}/>
  </LoginContainer>
}
export const ErrorMessage = styled.p`
color:red;
margin-bottom: calc(1% + 2px);
`

 const changeOpacity = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
        background-color:black;
    }
`
const LoginContainer = styled.form`
  width:100%;
  height:100%;
  margin-top: calc(5% + 50px);
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s linear;
  @keyframes aqui {
     0%{
      transform: translateX(2000px)
     } 
     70%{
      transform: translateX(-100px)
     } 
     100%{
      transform: translateX(0px)
     } 
    }
`