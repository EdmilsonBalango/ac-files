import React from "react";
import {MdDelete, MdCreateNewFolder} from 'react-icons/md'
import { Container } from "./style";


const Toolbar = () =>{
    return(
        <Container>
            <button>
                <MdCreateNewFolder size={30} />
            </button>
        </Container>
    )
}

export default Toolbar