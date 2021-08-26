import React from 'react'
import Toolbar from '../../components/Toolbar'
import { Container, Content } from './style'
import {useParams} from 'react-router-dom'

const InnerBag =()=>{
    const {ids} = useParams()
    console.log(ids)
    return(
        <Container>
            <Toolbar />
            <Content>
                Kmé
            </Content>
        </Container>
    )
}

export default InnerBag;