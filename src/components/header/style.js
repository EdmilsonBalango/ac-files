import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;

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
    min-height: 200px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    top: 7vh;
`
export const ListFilter = styled.div`
    display: flex;
    flex-direction: row;
    

    button{
        height: 50px;
        width: 50px;
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
