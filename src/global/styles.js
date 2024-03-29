import styled, { createGlobalStyle } from "styled-components";
import 'react-circular-progressbar/dist/styles.css'
export const GlobalStyles = createGlobalStyle`
    
    *{
        font-family: 'Raleway', sans-serif !important;
        padding: 0;
        margin: 0;
        outline: none;
        transition: height ease;
    }
`;

export const GlobalShiftsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`