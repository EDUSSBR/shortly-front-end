import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    div#__next, html,body{
        width:100%;
        height:100%;   
    }
    body {
        font-family: 'Lexend deca';
        font-weight: 400;
        box-sizing: border-box;
        padding: 0 14px;
    }
`