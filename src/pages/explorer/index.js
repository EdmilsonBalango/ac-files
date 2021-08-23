import React, { useState, useEffect } from 'react'
import { GlobalShiftsContainer } from '../../global/styles'
import {BsFillFolderFill, BsArrowsMove} from 'react-icons/bs'
import {FiEdit, FiDownload} from 'react-icons/fi'
import {HiFolderOpen} from 'react-icons/hi'
import {MdDelete, MdCreateNewFolder} from 'react-icons/md'
import { Container, RightMenu, Folders, Folder, File, KindFile} from './style'
import { Link } from 'react-router-dom'
import Toolbar from '../../components/Toolbar'
import axios from 'axios'
import docs from '../../assets/images/extensions/docs.png'
import sheet from '../../assets/images/extensions/sheets.png'
import csv from '../../assets/images/extensions/csv.png' 
import pdf from '../../assets/images/extensions/pdf.png' 



const Explore = () => {

    const [Menu, setMenu] =useState(false)
    const [selected, setSelected] = useState()
    const [position, setPosition] = useState({x:0, y:0})
    const [files, setFiles] = useState([])
    function handleMenu(event, id, kind){
        event.preventDefault()
        setMenu(false)
        setMenu(true)
        setSelected({id, kind})
        setPosition({x:event.pageX, y: event.pageY})
    }

    const FoldersFiles = [
        {
            id:1,
            folderName: 'Edmilson Balango',
            content: true,
        },
        {
            id:2,
            folderName: 'Clients',
            content: true,
        },
        {
            id:3,
            folderName: 'Contabilidade',
            content: true,
        }
    ]

    async function GetFiles(){

        const response = await axios.get('http://localhost:3001/getfiles')
        console.log(response.data)
        setFiles(response.data)
    }

    async function DownloadFile(){
        const data ={
            google_file_id: selected.id,
            kind: selected.kind
        }
        const response = await axios.post('http://localhost:3001/downloadfile',data)
        console.log(response.data)
    }

    useEffect(()=>{
        GetFiles()
    },[])

    return(
        <GlobalShiftsContainer>
            <Container onClick={()=>setMenu(false)} onContextMenu={event=>event.preventDefault()}>
                <Toolbar />          
                <Folders>
                    {FoldersFiles.map(f => {
                        return (
                        <Folder onDoubleClick={()=> alert('selecionou a pasta: '+ f.folderName)} onContextMenu={(event) => handleMenu(event, f.id)} key={f.id}>
                            <BsFillFolderFill size={80} color={'rgba(0,0,0,.5)'}/>
                            <strong>{f.folderName}</strong>
                        </Folder>
                    
                        )
                    })}

                    {files.map(f =>{
                        function treathIcon(){
                            if(f.kind === "application/pdf"){
                                return pdf
                            }else if(f.kind === "application/vnd.openxmlformats-officedocument.word"){
                                return docs
                            }else if(f.kind === "application/vnd.openxmlformats-officedocument.spre"){
                                return sheet
                            }else if(f.kind === "application/vnd.ms-excel"){
                                return csv
                            }
                        } 
                        return(
                            <File key={f.id_file} onDoubleClick={()=> window.open(`https://docs.google.com/document/d/${f.google_id_file}/edit`,'_blank')} onContextMenu={(event) => handleMenu(event, f.google_id_file, f.kind)} >
                                <KindFile src={treathIcon()} />
                                <strong>{f.file_name}</strong>
                            </File>
                        )
                    })}

                    {Menu && <RightMenu positionX={position.x } positionY={position.y}>
                        <Link to={'/folder'} ><button ><HiFolderOpen size={20}/>Abrir</button></Link>
                        <button onClick={()=> window.open(`https://docs.google.com/document/d/${selected}/edit`,'_blank')}><FiEdit size={20}/>Editar</button>
                        <button><BsArrowsMove size={20}/>Mover</button>
                        <button onClick={()=> DownloadFile()}><FiDownload size={20}/>Download</button>
                        <button><MdDelete size={20}/>Apagar</button>
                    </RightMenu>}

                </Folders>
                
                
            </Container>
        </GlobalShiftsContainer>
    )
}

export default Explore