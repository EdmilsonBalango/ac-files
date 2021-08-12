import styled,{css} from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;

    /* button{
        background-color: transparent;
        width: 80px;
        border: none;
        :hover{
            cursor: pointer;
            background-color: rgba(0,0,0,.2);
        }
    } */
        
`
export const Toolbar = styled.div`
    height: 5vh;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    /* padding: 5px; */
`

export const RightMenu = styled.div`

    width: 200px;
    position: absolute;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    top: ${props => props.positionY}px;
    left: ${props => props.positionX}px;
    
    button{
        width: 100%;
        height: 50px;
        font-weight: bold;
        color: rgba(0,0,0,.7);
        border-radius: 5px;
        border: none;
        background-color: transparent;
        display: flex;
        align-items:center;
        justify-content: space-evenly;
        :hover{
            background-color: rgba(0,0,0,.03);
        }
    }
`

export const Folders = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    
    

`

export const Folder = styled.button`
    margin: 20px;
    border: 1px solid #000;
    width: 150px;
    height: 150px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: rgba(0,0,0,.03);
    :hover{
        cursor: pointer;
        background-color: rgba(0,0,0,.08);
    }

    strong{
        color: rgba(0,0,0,.8);
        font-size: 9pt;
    }

`

