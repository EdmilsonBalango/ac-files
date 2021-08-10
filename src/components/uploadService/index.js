import React  from "react";
import Dropzone from "react-dropzone";
import { DropContainer } from "./style";



const UploadService =()=> {

    const renderMessage =(isDragReject, isDragActive) =>{
        if(isDragActive){
            return <p>Solte aqui</p>
        }
        if(isDragReject){
            return <p>não suportado</p>
        }
        return <p>drag here</p>
    }
    
    return(
        <Dropzone accept="application/*" onDropAccepted={(file)=>{console.log(file)}}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject})=>(
                <DropContainer
                    {...getRootProps({className: 'dropzone'})}
                    style={{borderWidth: 2, borderColor: isDragReject ? '#e57878' :'#78e5d5' , borderStyle: "dashed"}}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                >
                    <input {...getInputProps()} />
                    {renderMessage(isDragReject, isDragActive)}
                </DropContainer>
            )}
        </Dropzone>
    )
}


export default  UploadService




