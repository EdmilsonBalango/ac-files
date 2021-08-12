import React, { useState } from 'react'
import { GlobalShiftsContainer } from '../../global/styles'
import {BsFillFolderFill, BsArrowsMove} from 'react-icons/bs'
import {FiEdit} from 'react-icons/fi'
import {HiFolderOpen} from 'react-icons/hi'
import {MdDelete} from 'react-icons/md'
import { Container, RightMenu, Toolbar, Folders, Folder} from './style'


const Explore = () => {

    const [Menu, setMenu] =useState(false)
    const [selected, setSelected] = useState()
    const [position, setPosition] = useState({x:0, y:0})

    function handleMenu(event, id){
        event.preventDefault()
        setMenu(false)
        setMenu(true)
        setSelected(id)
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
    return(
        <GlobalShiftsContainer>
            <Container onClick={()=>setMenu(false)} onContextMenu={event=>event.preventDefault()}>
                <Toolbar>
                </Toolbar>

                <Folders>
                    {FoldersFiles.map(f => {
                        return (
                        <Folder onDoubleClick={()=> alert('selecionou a pasta'+ f.id)} onContextMenu={(event) => handleMenu(event, f.id)} key={f.id}>
                            <BsFillFolderFill size={80} color={'rgba(0,0,0,.5)'}/>
                            <strong>{f.folderName}</strong>
                        </Folder>
                    
                        )
                    })}
                    {Menu && <RightMenu positionX={position.x } positionY={position.y}>
                        <button onClick={()=>alert('pressionou a pasta' + selected)}><HiFolderOpen size={20}/>Abrir</button>
                        <button><FiEdit size={20}/>Editar</button>
                        <button><BsArrowsMove size={20}/>Mover</button>
                        <button><MdDelete size={20}/>Apagar</button>
                    </RightMenu>}
                </Folders>
            </Container>
        </GlobalShiftsContainer>
    )
}

export default Explore