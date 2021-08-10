import styled from "styled-components";

export const Container = styled.div`
    min-height: 200px;
    background-color: '#cdcdcd';
    width: 90%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 100px 0;

    a{
        text-decoration: none;
    }
`

export const NavButton = styled.button`
    font-weight: bold;
    padding: 10px;
    min-width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    background-color: rgba(0,0,0,0);
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    color: '#6f6f6f';
    svg{
        margin-right: 15px;
    }
    :hover{
        background-color: rgba(0,0,0,.05);
        cursor: pointer;
    }
    
`

