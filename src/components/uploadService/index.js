import React  from "react";
import Dropzone from "react-dropzone";
import { DropContainer,DropMessage, FileList } from "./style";



const UploadService =({onUpload})=> {
    
    const renderMessage =(isDragReject, isDragActive) =>{
        if(!isDragActive){
            return <DropMessage>Clique ou Arraste para fazer upload de seus arquivos</DropMessage>
        }
        if(isDragReject){
            return <DropMessage status="error">Não suportado</DropMessage>
        }
        return <DropMessage status="success">Solte seu arquivos</DropMessage>
    }
    
    return(
        <>
            <Dropzone accept="image/*" onDropAccepted={()=>onUpload}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject})=>(
                    <DropContainer
                        {...getRootProps({className: 'dropzone'})}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />
                        {renderMessage(isDragReject, isDragActive)}
                    </DropContainer>
                )}
            </Dropzone>
        </>


    )
}


export default  UploadService




