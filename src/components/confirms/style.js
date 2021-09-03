import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`

export const CenterCard = styled.div`
    height: 200px;
    width: 400px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

        input{
            outline: none;
            border: none;
            background-color: rgba(0, 0, 0, 0.05);
            border-radius: 5px;
            /* flex: 1; */
            height: 50px;
            /* margin-left: 5px; */
            width: 90%;
            padding-left: 10px;
            font-weight: 600;
            font-size: 11pt;
            color: #444;
        }

        div{
            margin-top:  20px;
            width: 90%;
            display: flex;
            justify-content: space-around;
        }

`

export const ActionButton = styled.button`
    border: none;
    height: 40px;
    border-radius: 5px;
    background-color: transparent;
    color: #444;
    padding: 10px;
    font-weight: bold;
    width: 150px;

    :hover{
        background-color: ${props => props.action === "ok" ? 'rgba(0, 41, 107,.1)' : 'rgba(239, 167, 167, .2)'};
        cursor: pointer;
    }
`