import styled, { css } from "styled-components";


const dragReject = css`
    border-color: #e57878;
` 

const dragActive = css`
    border-color: #2a9d8f;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const DropContainer =  styled.div.attrs({
    className: 'dropzone'
})`
    border: 2px dashed #ddd;
    width: 90%;
    min-height: 50px;
    font-size: 11pt;
    border-radius: 4px;
    cursor: pointer;
    transition: height 0.2s ease;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.isDragActive && dragActive}
    ${props => props.isDragReject && dragReject}

`
const messageColors ={
    default: '#ddd',
    error: '#e57878',
    success: '#2a9d8f'
}
export const DropMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.status || 'default']};
    justify-content: center;
    align-items: center;
    text-align: center;

`

export const FileList = styled.div`
    background-color: #000000;
    width: 90%;
    position: absolute;
    bottom:0;
    align-self: center;
    height: 50px;
`