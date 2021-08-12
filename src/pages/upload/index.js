import React from 'react'
import UploadService from '../../components/uploadService'
import { GlobalShiftsContainer } from '../../global/styles'
import { Container } from './style'



const Upload = () => {
    const handleUpload = (files) =>{
        return 'ola'
    }

    return(
        <GlobalShiftsContainer>
            <Container>
                <UploadService onUpload={handleUpload()}/>
            </Container>
        </GlobalShiftsContainer>
    )
}

export default Upload