import styled from 'styled-components'
import { Input } from '../src/components/Input'
import { Button } from '../src/components/Button'
import { useAccount } from '../src/hooks/useAccount'
import { ErrorMessage } from './cadastro'
import { Vortex } from 'react-loader-spinner'

export default function Login() {
  const {email, password, setEmail, setPassword, handleLogin, isLoadingLogin=false, loginError} = useAccount()
  return <LoginContainer>{isLoadingLogin ? <Vortex
    visible={true}
    height="60"
    width="60"
    ariaLabel="vortex-loading"
    wrapperClass="vortex-wrapper"
    wrapperStyle={{marginBottom:70, marginTop:40}}
    colors={['red', 'green', 'black', 'yellow', 'orange', 'purple']}
  />:
    (<>  {loginError?.length>0 && loginError?.map(item=><ErrorMessage key={item}>{item}</ErrorMessage>) }
    <Input placeholder={"E-mail"} value={email} onChangeFunction={(e)=>setEmail(e.target.value)}/>
    <Input type={"password"} placeholder={"Senha"} value={password} onChangeFunction={(e)=>setPassword(e.target.value)}/></>)}
    <Button disabled={isLoadingLogin} type="submit" onClick={(e)=>handleLogin(e)} text={"Entrar"}/>
  </LoginContainer>
}

const LoginContainer = styled.form`
  width:100%;
  height:100%;
  margin-top: calc(5% + 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`