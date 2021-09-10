import React, { useState, useEffect } from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { GlobalShiftsContainer } from '../../global/styles'
import {BsFillFolderFill, BsArrowsMove} from 'react-icons/bs'
import {FiEdit, FiDownload} from 'react-icons/fi'
import {HiFolderOpen} from 'react-icons/hi'
import { MdDelete } from 'react-icons/md'
import { Container, RightMenu, Folders, Folder, File, KindFile, DeleteContainer,CenterCard, ActionButton, MoveAreaView, ButtonAction } from './style'
import Toolbar from '../../components/Toolbar'
import axios from 'axios'
import docs from '../../assets/images/extensions/docs.png'
import sheet from '../../assets/images/extensions/sheets.png'
import csv from '../../assets/images/extensions/csv.png' 
import pdf from '../../assets/images/extensions/pdf.png' 
import Dropzone from 'react-dropzone'
import fileSize from 'filesize'



const Explore = () => {
    const { ids } =useParams()
    const history = useHistory()
    const [selfBag, setSelfBag] = useState(1)
    const [Menu, setMenu] =useState(false)
    const [selected, setSelected] = useState()
    const [position, setPosition] = useState({x:0, y:0})
    const [files, setFiles] = useState([])
    const [bags, setBags] = useState([])
    const [toggleDelete, setToggleDelete] = useState(false)
    const [toggleMove, setToggleMove] = useState(true)

    function handleMenu(event, id, kind, ){
        event.preventDefault()
        setMenu(false)
        setMenu(true)
        setSelected({id, ...kind})
        setPosition({x:event.clientX, y: event.clientY})
                
    }

    async function GetFiles(){

        const data = {
            folder_id: ids,
        }

        const response = await axios.post('https://ac-file-backend.herokuapp.com/getfiles', data)
        setFiles(response.data)
        // console.log(response.data)
        
    }



    async function GetFolders(){

        const data = {
            folder_id: ids
        }

        const response = await axios.post('https://ac-file-backend.herokuapp.com/getbags', data)
        response.data && setBags(response.data) 
   
    }

    async function GetOwnfolder(){
        const data = {
            folder_id: ids
        }
        const responsetoSelf =  await axios.post('https://ac-file-backend.herokuapp.com/selfbag', data)
        setSelfBag(responsetoSelf.data[0])
    }

    async function DownloadFile(){
        const data ={
            google_file_id: selected.id,
            kind: selected.kind
        }
        await axios.post('https://ac-file-backend.herokuapp.com/downloadfile',data).then(response => {
            const {name, webContentLink: file} = response.data.data
            window.open(file, name)
        })

    }


    useEffect(()=>{
        GetFiles()
        GetOwnfolder()
    },[files])

    useEffect(()=>{
        GetFolders()
        GetOwnfolder()
    },[bags])


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
            // console.log(selected.id)
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
        const {kind} = selected
        
        
        if(kind === 'folder'){
            const data ={
                db_id: id_folder,
            }
            await axios.post('https://ac-file-backend.herokuapp.com/deletefolder', data).then(response=>{
                console.log(response.data)
            })
            // console.log(data)
            
            
        }else if(kind === 'file'){
            const data ={
                google_id_file: id,
                db_id: db_id,
            }
            await axios.post('https://ac-file-backend.herokuapp.com/deletefile', data).then(response => {
                console.log(response.data)
            })
               
        }        
        
    }

    function MoveArea(){
        const [moveBags, setMoves] = useState()

        useEffect(()=>{

        },[])

        return (
        <MoveAreaView positionX={position.x} positionY={position.y}>
            <div>
                <Folder>
                    <BsFillFolderFill size={30} color={'rgba(0,0,0,.5)'} />
                    <strong>Edmilson</strong>
                </Folder>
            </div>
            <div>
                <ButtonAction action={'ok'} state={1}>Mover</ButtonAction>
                <ButtonAction onClick={()=> setToggleMove(false)}>Cancelar</ButtonAction>
            </div>
        </MoveAreaView>
        
        )
    }


    function handlefiles({file, bag}){
       const uploadedFiles = file.map(f =>({
            f,
            fileName: f.name,
            id: f.name,
            type: f.type,
            bag, 
            size: fileSize(f.size, {standard: 'jedec'}),
            progress: 0,
            uploaded: false,
            error: false,
            url: null
        }))

        uploadedFiles.forEach(file => uploadFile(file))
    }


    function uploadFile(uploadedFiles){
        const data = new FormData();
        data.append('file', uploadedFiles.f, uploadedFiles.fileName)
        data.append('bag', Number(uploadedFiles.bag))
        axios.post('https://ac-file-backend.herokuapp.com/uploadinbag',data, {
            onUploadProgress: e => {
                // const progress = parseInt(Math.round((e.loaded * 100) / e.total))
                // this.updateFile(uploadFiles.id, {
                //     progress,
                // })
            }
        }).then(response =>{
            console.log(response.data)
        })

    }

    return(
        <GlobalShiftsContainer>
            <Container onClick={()=>{setMenu(false); setToggleMove(false)}} onContextMenu={event=>event.preventDefault()}>
                
                <Toolbar current={ids} motherBag={selfBag.mother_folder} />
                <Dropzone accept="application/*" onDropAccepted={file=>handlefiles({file, bag: Number(ids)})} onDropRejected={info=> console.log(info)}>  
                {({getRootProps, getInputProps, isDragActive, isDragReject}) => (

                <Folders 
                    {...getRootProps({className: 'dropezone'})}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                
                >
                     
                     {bags && bags.map(f => {
                        return (
                        <Folder onDoubleClick={()=> history.push(`/cloud/explore/${f.id_folder}`)} onContextMenu={(event) => handleMenu(event, f.id_folder, {kind: 'folder', details: f})} key={f.id_folder}>
                            <BsFillFolderFill size={80} color={'rgba(0,0,0,.5)'}/>
                            <strong>{f.folder_name}</strong>
                        </Folder>
                        )
                    })}
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
                        <button onClick={()=> console.log('f')}><FiEdit size={20}/>Editar</button>
                        <button onClick={()=> setToggleMove(true)}><BsArrowsMove size={20}/>Mover</button>
                        <button onClick={()=> DownloadFile()} disabled={true}><FiDownload size={20}/>Download</button>
                        <button onClick={()=> handlDelete()}><MdDelete size={20}/>Apagar</button>
                    </RightMenu>}



                    
                </Folders>

                    

                )}
                </Dropzone>              
            </Container>
            { toggleDelete && <DeleteContainer>
            <CenterCard>
                <input placeholder={'Para confirmar escreva "APAGAR"'} />
                <div>
                    <ActionButton action={'ok'} >Apagar</ActionButton>
                    <ActionButton action={'cancel'}>Cancelar</ActionButton>
                </div>
            </CenterCard>
        </DeleteContainer>}
        </GlobalShiftsContainer>
    )
}

export default Explore