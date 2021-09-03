import styled from "styled-components";

export const Container = styled.div`
    height: 5vh;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    align-items: center;
    flex-direction: row;
    /* background-color: '#fff'; */
    /* position: absolute; */
        button{
            border: none;
            margin: 0 10px;
            background-color: transparent;
            color: rgba(0,0,0,.5);
            padding: 5px;
            border-radius: 5px;
            display: flex;
            align-items: center;

                :hover{
                    color: rgba(0,0,0,.6);
                    cursor: pointer;
                }
        }
`

export const NewBagName = styled.div`
    clear: both;
    height: 50px;
    min-width: 400px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    position: absolute;
    opacity: 1;
    top: 40px;
    left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    z-index: 1000;

    input{
        outline: none;
        border: none;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        /* flex: 1; */
        height: 80%;
        /* margin-left: 5px; */
        min-width: 200px;
        padding-left: 10px;
        font-weight: 600;
        font-size: 11pt;

    }
    
`
const buttonColors ={
    ok: '#000',
    cancel: '#f48c06'

}
export const ActionButtons = styled.button`

    height: 80%;
    background-color: #000;
    color: #444;
    padding: 10px;
    font-weight: bold;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        background-color: rgba(0,0,0,.05);
    }
`
