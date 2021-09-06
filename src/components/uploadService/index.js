import React, {Component}  from "react";
import Dropzone from "react-dropzone";
import { DropContainer,DropMessage } from "./style";



export default class UploadService extends Component {
    
     renderMessage =(isDragReject, isDragActive) =>{
        if(!isDragActive){
            return <DropMessage>Clique ou Arraste para fazer upload de seus arquivos</DropMessage>
        }
        if(isDragReject){
            return <DropMessage status="error">Não suportado</DropMessage>
        }
        return <DropMessage status="success">Solte seu arquivos</DropMessage>
    }
    
    render(){
        const {onUpload} = this.props
    return(
        <>
            <Dropzone accept="application/*" onDropAccepted={onUpload}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject})=>(
                    <DropContainer
                        {...getRootProps({className: 'dropzone'})}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />
                        {this.renderMessage(isDragReject, isDragActive)}
                    </DropContainer>
                )}
            </Dropzone>
        </>


    )
}
}


// export default  UploadService




