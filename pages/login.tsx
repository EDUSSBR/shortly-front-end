import styled from 'styled-components'
import { Input } from '../src/components/Input'
import { Button } from '../src/components/Button'

export default function Login() {
  return <LoginContainer>
    <Input placeholder={"E-mail"}/>
    <Input placeholder={"Senha"}/>
    <Button text={"Entrar"}/>
  </LoginContainer>
}

const LoginContainer = styled.div`
  width:100%;
  height:100%;
  margin-top: calc(5% + 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`