import styled, { createGlobalStyle } from "styled-components";
import 'react-circular-progressbar/dist/styles.css'
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

export const GlobalShiftsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`