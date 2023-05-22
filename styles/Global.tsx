import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    div#__next, html,body{
        width:100%;
        height:100%;   
    }
    body {
        font-family: 'Lexend deca';
        font-weight: 400;
        padding: 0 14px;
    }
    a, svg, button{
        cursor:pointer;
    }
`