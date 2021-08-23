import styled from "styled-components";

export const Container = styled.div`
    height: 5vh;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    align-items: center;
    flex-direction: row;
        button{
            border: none;
            margin: 0 10px;
            background-color: transparent;
            color: rgba(0,0,0,.5);
            padding: 5px;
            border-radius: 5px;

                :hover{
                    color: rgba(0,0,0,.6);
                    cursor: pointer;
                }
        }
`
