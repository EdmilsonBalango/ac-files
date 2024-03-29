import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalShiftsContainer } from '../../global/styles'
import { FiDownload } from 'react-icons/fi'
import {HiFolderOpen} from 'react-icons/hi'
import { MdDelete } from 'react-icons/md'
import { Container, RightMenu, Folders, File, KindFile } from './style'
import axios from 'axios'
import docs from '../../assets/images/extensions/docs.png'
import sheet from '../../assets/images/extensions/sheets.png'
import csv from '../../assets/images/extensions/csv.png' 
import pdf from '../../assets/images/extensions/pdf.png' 




const Trash = () => {

    const history = useHistory()
    const [Menu, setMenu] =useState(false)
    const [selected, setSelected] = useState()
    const [position, setPosition] = useState({x:0, y:0})
    const [files, setFiles] = useState([])

    function handleMenu(event, id, kind, ){
        event.preventDefault()
        setMenu(false)
        setMenu(true)
        setSelected({id, ...kind})
        setPosition({x:event.clientX, y: event.clientY})
                
    }

    async function GetFiles(){
        const response = await axios.get('https://ac-file-backend.herokuapp.com/gettrash')
        setFiles(response.data)
            
    }


    useEffect(()=>{
        GetFiles()
    },[])


   async function handleOpen(){
        const { kind } = selected 
        if(kind === 'file'){
            const data ={
                google_file_id: selected.id,
            }
            await axios.post('https://ac-file-backend.herokuapp.com/downloadfile',data).then(response => {
                const {name, webViewLink: file} = response.data.data
                window.open(file, name)
            })
        }else{
            history.push(`/cloud/explore/${selected.id}`)
        }
    }

    async function handleOpenOnDoubleClick(id){ 
        const data ={
            google_file_id: id,
        }
        await axios.post('https://ac-file-backend.herokuapp.com/downloadfile',data).then(response => {
            const {name, webViewLink: file} = response.data.data
            window.open(file, name)
        })        
    }

    async function handlDelete(){
        const { google_id_file: id, id_file: db_id, id_folder } = selected.details

        const data ={
            google_id_file: id,
            db_id: db_id,
        }
     
        await axios.post('https://ac-file-backend.herokuapp.com/deletefilepermanently', data).then(response => {
            console.log(response.data)
        })
    }

    async function handleRecoverFile(){
        const { id_file: db_id } = selected.details
        
        const data ={
            db_id: db_id,
        }
     
        await axios.post('https://ac-file-backend.herokuapp.com/recoverfile', data).then(response => {
            console.log(response.data)
        })
    
    }

    return(
        <GlobalShiftsContainer>
            <Container onClick={()=>setMenu(false)} onContextMenu={event=>event.preventDefault()}>          
                <Folders>
                    {files && files.map(f =>{
                        function treathIcon(){
                            if(f.kind === "application/pdf"){
                                return pdf
                            }else if(f.kind === "application/msword" || f.kind === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
                                return docs
                            }else if(f.kind === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
                                return sheet
                            }else if(f.kind === "application/vnd.ms-excel"){
                                return csv
                            }
                        } 
                        return(
                            <File key={f.id_file} onDoubleClick={()=> handleOpenOnDoubleClick(f.google_id_file)} onContextMenu={(event) => handleMenu(event, f.google_id_file, {kind: 'file', details: f})} >
                                <KindFile src={treathIcon()} />
                                <strong>{f.file_name}</strong>
                            </File>
                        )
                    })}
                    {Menu && <RightMenu positionX={position.x} positionY={position.y}>
                        <button onClick={()=> handleOpen()} ><HiFolderOpen size={20}/>Abrir</button>
                        <button onClick={()=> handleRecoverFile()}><FiDownload size={20}/>Recuperar</button>
                        <button onClick={()=> handlDelete()}><MdDelete size={20}/>Apagar</button>
                    </RightMenu>}
                    {!!files && <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}><h1 style={{color: '#666'}}>Nada no lixo</h1></div>}
                </Folders>
            </Container>
        </GlobalShiftsContainer>
    )
}

export default Trash