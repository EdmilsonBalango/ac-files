import React, { Component } from 'react'
import FileList from '../../components/fileList'
import UploadService from '../../components/uploadService'
import { GlobalShiftsContainer } from '../../global/styles'
import { Container } from './style'
import fileSize from 'filesize'
import axios from 'axios'



export default class Upload extends Component {

    state ={
        uploadedFiles: []
    }

    handleUpload = files =>{
        const uploadedFiles =  files.map(f => ({
            f,
            fileName: f.name,
            id: f.name,
            type: f.type,
            size: fileSize(f.size, {standard: 'jedec'}),
            progress: 0,
            uploaded: false,
            error: false,
            url: null

        }))

        this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
        })
        
        uploadedFiles.forEach(this.uploadProcess)
    }

    updateFile = (id, data) => {
        this.setState({uploadedFiles: this.state.uploadedFiles.map( uploadedFile => {
            return id === uploadedFile.id ? {...uploadedFile, ...data } : uploadedFile
        }) })

    }

    uploadProcess = (uploadFiles) =>{
        const data = new FormData();
        data.append('file', uploadFiles.f, uploadFiles.fileName)
        axios.post('https://ac-file-backend.herokuapp.com/upload',data, {
            onUploadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total))
                this.updateFile(uploadFiles.id, {
                    progress,
                })
            }
        }).then(response =>{
            console.log(response.data)
        })

    }

    render(){

        const { uploadedFiles } = this.state

    return(
        <GlobalShiftsContainer>
            <Container>
                <UploadService onUpload={this.handleUpload}/>
            {!! uploadedFiles.length && <FileList files={uploadedFiles} />}
            </Container>
        </GlobalShiftsContainer>
    )
}
}

// export default Upload