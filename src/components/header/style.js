import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    position: relative;

`
export const Logo = styled.img`
    /* background-image: url(${props => props.logoImage}); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 50px;
    height: 40px;
`

export const SearchBar = styled.div`
    width: 40vw;
    height: 50px;
    background-color: '#444';
    border-radius: 10px;
    /* position: relative; */

    input{
        height: 100%;
        width: 100%;
        background-color: transparent;
        border: none;
        font-weight: 600;
        margin: 0 5px;
    }
    button{
        margin: 5px;
        border-radius: 100%;
        height: 35px;
        width: 40px;
        background-color: rgba(0,0,0,0);
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }
    button:hover{
        background-color: rgba(0,0,0,.1);
        cursor: pointer;
    }

`

export const Filter = styled.div`
    position: absolute;
    width: 50vw;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    min-height: 20vh;
    max-height: 30vh;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    top: 7vh;
    left: 25%;
    z-index:1000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const ListFilter = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 50px;
    padding: 20px;
    flex-direction: column;

        button{
            background-color: rgba(0,0,0,.03);
            height: 60px;
            width: 100%;
            border-radius: 5px;
        }

    

`

export const OptionsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    button{
        height: 8vh;
        min-width: 10%;
        max-width: 12%;
        background-color: rgba(0,0,0,.02);
        border-radius: 20%;

        img{
            width: 70%;
        }
    }
`

export const Profile = styled.a`

    background-color: '#cdcdcdcd';

img{
    height: 40px;
    width: 40px;
}
:hover{
    cursor: pointer;
}    
`

export const MyPic = styled.img`

background-image: ${props => props.src};
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 50px;
`
