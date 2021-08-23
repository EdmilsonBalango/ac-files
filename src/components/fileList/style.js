import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    /* justify-self: flex-start; */
    position: absolute;
    bottom: 0;
    background-color: #fff;
    width: 70%;
    min-height: 100px;
    border: 1px solid #f1f1f1;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    justify-content: center;
    align-items: center;
    max-height: 30vh;

    
        
    
`

export const Content = styled.div`
    width: 95%;
    height: 90%;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: rgba(0,0,0,.03) ;
        border-radius: 5px;

    }
    ::-webkit-scrollbar-thumb{
        background: rgba(0,0,0,.08);
        border-radius: 5px;

        :hover{
            background: rgba(0,0,0,.15);
        }
    }
    
`

export const Item = styled.div`
    width: 90%;
    height: 50px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;


`

export const ExtensionIcon = styled.img`
    max-width: 40px;
    max-height: 40px;
    background-image: url(${props => props.extensionName});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* border: 1px solid #fff; */
`

export const FileDetails =  styled.div`
    display: flex;
    align-items: center;

    div{
        margin-left: 10px;
        color: rgba(0,0,0,.6);
        strong{
            font-size: 11pt;
        }
        p{
            font-size: 8pt;
            
        }
    }
`

export const FileOptions =styled.div`
    display: flex;
    align-items: center;
    button{
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: none;
        border-radius: 100%;
        :hover{
            background-color: rgba(0,0,0,.05);
            cursor: pointer;
        }
    }
`
