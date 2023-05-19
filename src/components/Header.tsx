import Link from "next/link"
import styled from "styled-components"

export function Header({ shouldDisplay = false, displayMessage = true, name="Pessoa" }) {
    return <HeaderContainer>
        {<WelcomeMessage displayMessage={displayMessage}>Seja bem-vindo(a), {name}!</WelcomeMessage>}
        <Nav>
            {!shouldDisplay && (<><Link href="/cadastro">Cadastrar</Link>
                <Link href="/login">Logar</Link></>)}
            {shouldDisplay && (<><Link href="/">Home</Link>
                <Link href="/ranking">Ranking</Link>
                <Link href="">Sair</Link></>)}
        </Nav>
    </HeaderContainer>
}

const WelcomeMessage = styled.p`
        white-space:nowrap;
        display: ${({displayMessage})=> displayMessage ? 'block': 'none'}; 
        color:#5D9040;
        @media (max-width:430px){
        padding-top: 10px;   
        font-size:12px;
        align-self:flex-start;
    }
`
const HeaderContainer = styled.header`
    width: 100%;
    height: 78px;
    max-width: 769px;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
`
const Nav = styled.nav`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width:70%;
    display:flex;
    align-items:flex-end;
    justify-content:flex-end;

    a{  
        @media (max-width:430px){
        font-size:12px;
        justify-self:center;
    }
        font-size: 14px;
        line-height: 18px;
        color: #9C9C9C;
        margin-left:22px;
        transition: all 0.2s linear;
        :hover{
            color: #5D9040;
        }
        text-decoration:none;
    }
`