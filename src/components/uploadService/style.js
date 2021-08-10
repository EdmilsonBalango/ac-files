import styled, { css } from "styled-components";


const dragReject = css`
    border-color: green;
` 

const dragActive = css`
    border-color: '#e57878';
`

export const DropContainer =  styled.div.attrs({
    className: 'dropzone'
})`
    border: 2px solid '#ddd';
    width: 90%;
    min-height: 50px;
    font-size: 11pt;
    border-radius: 4px;
    cursor: pointer;
    transition: height 0.2s ease;
    display: flex;
    justify-content: center;
    align-items: center;

     
    

`