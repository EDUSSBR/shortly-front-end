import styled from "styled-components"
import Image from 'next/image';
import logo from '../assets/bermuda.jpg';
export function Logo({ }) {
    return <LogoContainer>
        <LogoItemContainer>
            <LogoTitle>Shortly</LogoTitle>
            <Image src={logo} width={'102'} height={'102'} alt={"logo"}/>
        </LogoItemContainer>
    </LogoContainer>
}

const LogoTitle = styled.h1`
    font-weight: 200;
    font-size: 64px;
    line-height: 80px;
    max-width:340px;
    height: 102px;
`

const LogoItemContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin:0 auto;
    max-width:340px;
    height: fit-content;
    @media (max-width: 360px) {
        flex-direction:column;
        align-items: center;
    }
`
const LogoContainer = styled.div`
    margin-top:calc(5% + 15px);
    width: 100%;
    height: fit-content;
`
