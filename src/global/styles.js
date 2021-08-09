import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${props => props.theme.body};
        
    }
    *{
        font-family: 'Raleway';
        padding: 0;
        margin: 0;
        outline: none;
    }
`;