import React, { useState, useEffect } from 'react'
import {useHistory, useParams} from 'react-router-dom'
import fileDownload from 'js-file-download'
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
    const { ids } =useParams()
    const history = useHistory()
    const [Menu, setMenu] =useState(false)
    const [selected, setSelected] = useState()
    const [position, setPosition] = useState({x:0, y:0})
    const [files, setFiles] = useState([])
    const [bags, setBags] = useState([])
    function handleMenu(event, id, kind, name){
        event.preventDefault()
        setMenu(false)
        setMenu(true)
        setSelected({id, kind, name})
        setPosition({x:event.pageX, y: event.pageY})
    }

    async function GetFiles(){

        const data = {
            folder_id: ids,
        }

        const response = await axios.post('http://localhost:3001/getfiles', data)
        { response.data && setFiles(response.data) }
        
    }

    async function GetFolders(){

        const data = {
            folder_id: ids
        }

        const response = await axios.post('http://localhost:3001/getbags', data)
        { response.data && setBags(response.data) }
        
    }

    async function DownloadFile(){
        const data ={
            google_file_id: selected.id,
            kind: selected.kind
        }
        await axios.post('http://localhost:3001/downloadfile',data).then(response => {
            fileDownload(response.data, selected.name)
            // console.log(response.data)
        })


    }

    useEffect(()=>{
        GetFiles()
    },[files])

    useEffect(()=>{
        GetFolders()
    },[bags])

    return(
        <GlobalShiftsContainer>
            <Container onClick={()=>setMenu(false)} onContextMenu={event=>event.preventDefault()}>
                <Toolbar current={ids} />          
                <Folders>
                    {bags.map(f => {
                        return (
                        <Folder onDoubleClick={()=> history.push(`/explore/${f.id_folder}`)} onContextMenu={(event) => handleMenu(event, f.id)} key={f.id_folder}>
                            <BsFillFolderFill size={80} color={'rgba(0,0,0,.5)'}/>
                            <strong>{f.folder_name}</strong>
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
                            <File key={f.id_file} onDoubleClick={()=> window.open(`https://docs.google.com/document/d/${f.google_id_file}/edit`,'_blank')} onContextMenu={(event) => handleMenu(event, f.google_id_file, f.kind, f.file_name)} >
                                <KindFile src={treathIcon()} />
                                <strong>{f.file_name}</strong>
                            </File>
                        )
                    })}

                    {Menu && <RightMenu positionX={position.x } positionY={position.y}>
                        <button onClick={()=> history.push(`/explore/${selected.id}`)} ><HiFolderOpen size={20}/>Abrir</button>
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