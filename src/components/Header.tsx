import Link from "next/link"
import styled from "styled-components"
import { useLink } from "../hooks/useLink"
import { useAccount } from "../hooks/useAccount"

export function Header() {
    const { userInfoClient, handleLogout } = useLink()
    const displayMessage =userInfoClient?.name?.length>0
    return <HeaderContainer>
        {<WelcomeMessage displayMessage={displayMessage}>Seja bem-vindo(a), {userInfoClient?.name || "Pessoa"}!</WelcomeMessage>}
        <Nav>
            {!displayMessage && (<>
            <Link href="/cadastro">Cadastrar</Link>
            <Link href="/login">Logar</Link>
                </>)}
            {displayMessage && (<><Link href="/">Home</Link>
                <Link href="/ranking">Ranking</Link>
                <Link onClick={handleLogout} href="">Sair</Link></>)}
        </Nav>
    </HeaderContainer>
}

const WelcomeMessage = styled.p`
        white-space:nowrap;
        display: ${({ displayMessage }) => displayMessage ? 'block' : 'none'}; 
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