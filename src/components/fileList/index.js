import React from 'react'
import {Container, Item, ExtensionIcon, FileDetails, FileOptions, Content} from './style'
import docs from '../../assets/images/extensions/docs.png'
import sheet from '../../assets/images/extensions/sheets.png'
import csv from '../../assets/images/extensions/csv.png' 
import pdf from '../../assets/images/extensions/pdf.png' 
import {MdDelete, MdError} from 'react-icons/md'
import CircularProgressbar from 'react-circular-progressbar'


const FileList = ({files}) => {
    // console.log(files)
    
    return(
        <Container>
            <Content>
            {files.map(f=>{
                function handleIcon(){
                    if(f.type === "application/pdf"){
                        return pdf
                    }else if(f.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
                        return docs
                    }else if(f.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
                        return sheet
                    }
                    else if(f.type === "application/vnd.ms-excel"){
                        return csv
                    }
                } 
                
                return(
                <Item key={`${(f.id)}-${Math.random(Math.floor())}`}>
                <FileDetails>
                    <ExtensionIcon src={handleIcon()}/>
                    <div>
                        <strong>{f.fileName}</strong>
                        <p>{f.size}</p>
                    </div>
                </FileDetails>
                <FileOptions>
                    {!! f.url && <button>
                        <MdDelete size={30}  color={'rgba(0,0,0,.4)'}/>
                    </button>}
                        {!f.uploaded.uploaded && ! f.error && <CircularProgressbar 
                        percentage={f.progress} 
                        styles={{root: {width: 24},path: {stroke: '#0673AE'}}} 
                        strokeWidth={15}    
                        />}
                    {f.error && <button>
                        <MdError size={30} color={'#dc2f02'} />
                    </button>}
                </FileOptions>
            </Item>  
            )})
            }
            </Content>
        </Container>
    )
}


export default FileList;