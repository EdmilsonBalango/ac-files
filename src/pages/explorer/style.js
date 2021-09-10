import styled, {css} from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    position: relative;

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

export const RightMenu = styled.div`
    /* clear: both; */
    width: 200px;
    position: absolute;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    top: ${props => props.positionY}px;
    left: ${props => props.positionX / 2}px;
    
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
    a{
        text-decoration: none;
    }
`
const dragActive = css`
    background-color: #bde0fe;
`
const dragReject =css`
    background-color: #fff0f3;
`
export const Folders = styled.div.attrs({
    className: 'dropzone'
})`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    /* position: relative; */
    overflow-x: hidden;
    ${props => props.isDragActive && dragActive };

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
export const File = styled.button`
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

export const KindFile =  styled.img`
    height: 80px;
    width: 80px;
    padding: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const DeleteContainer = styled.div`
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
export const MoveAreaView = styled.div`
    width: 500px;
    height: 500px;
    position: absolute;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    top: ${props => props.positionY}px;
    left: ${props => props.positionX /2}px; 
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    
        div{
            width: 100%;
            display: flex;
            justify-content: space-around;
        }

    
`

export const ButtonAction =  styled.button`
    border: none;
    height: 40px;
    border-radius: 5px;
    background-color: ${props => props.state === 1 ? 'rgba(0, 41, 107,.1)' : 'transparent'};
    color: #444;
    padding: 10px;
    font-weight: bold;
    width: 150px;

    :hover{
        background-color: ${props => props.action === "ok" ? 'rgba(0, 41, 107,.1)' : 'rgba(239, 167, 167, .2)'};
        cursor: pointer;
    }
`
