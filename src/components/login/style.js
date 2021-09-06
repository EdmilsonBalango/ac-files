import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    background-color: #f1f1f1;
    height: 100vh;
    width: 100vw;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;

`
export const LogCard = styled.div`
    height: 50vh;
    width: 30vw;
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 20px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img{
        width: 100px;
        margin: 20px 0;
        padding-left: 20px;
    }
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px 0;
        strong{
            font-size: 10pt;
            color: #999;
            :hover{
                cursor: pointer;
                color: #555;
            }
        }
        input{
            border: none;
            background-color: rgba(0, 0, 0, 0.05);
            height: 40px;
            width: 60%;
            font-size: 14pt;
            border-radius: 5px;
            padding-left: 10px;
            font-weight: bold;
            text-align: center;
            color: rgba(0, 0, 0, .6);
            -webkit-text-security: disc;
            ::placeholder{
                opacity: .2;
                font-size: 14pt;

            }
        }
        select{
            border: none;
            background-color: rgba(0, 0, 0, 0.05);
            height: 40px;
            width: 62%;
            margin-bottom: 10px;
            font-size: 10pt;
            border-radius: 5px;
            padding-left: 10px;
            font-weight: bold;
            text-align: center;
            color: rgba(0, 0, 0, .6);
            text-align: center;
            option{
                border: none;
                font-size: 10pt;
                color: #999;
                font-weight: bold;
                border-radius: 5px;
                background-color: transparent;
                height: 50px;
                

            }
        }
        button{
            width: 40%;
            border: none;
            height: 40px;
            border-radius: 5px;
            font-weight: 650;

            background-color: rgba(0, 41, 107,.1);
            color: #444;
            
            :hover{
                background-color: rgba(0, 41, 107,.2);
                cursor: pointer;
            }
        }
        div{
            display: flex;
            margin-top: 10px;
            justify-content: center;
            align-items: center;
            position: relative;
            p{
            color: red;
            font-size: 10pt;
            margin-right: 10px;
            }
        }
        
    }
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button{
        margin-top: 20px;
    }
`

export const AnimationArea = styled.div`
    height: 50px;
    position: absolute;
    bottom: -10;
`