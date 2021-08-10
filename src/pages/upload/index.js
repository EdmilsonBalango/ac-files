import React from 'react'
import UploadService from '../../components/uploadService'
import { GlobalShiftsContainer } from '../../global/styles'
import { Container } from './style'



const Upload = () => {
    return(
        <GlobalShiftsContainer>
            <Container>
                <UploadService />
            </Container>
        </GlobalShiftsContainer>
    )
}

export default Upload