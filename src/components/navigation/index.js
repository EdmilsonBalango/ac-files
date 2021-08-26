import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Container, NavButton } from './style'



const Navigator =()=>{
    const [currentButton, setCurrentButton] = useState('upload')

    return(
        <Container>
            <Link to='/'>
            <NavButton onClick>
            <svg class="a-s-fa-Ha-pa a-ml-da-Q-c" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="#6f6f6f"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></svg>
            Upload
            </NavButton>
            </Link>

            <Link to='/explore/1'>
            <NavButton>
            <svg x="0px" y="0px" height="24px" width="24px" focusable="false" viewBox="0 0 24 24" fill="#6f6f6f"><g><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path><path d="M0 0h24v24H0z" fill="none"></path></g></svg>
            Arquivos
            </NavButton>
            </Link>
            <NavButton>
            <svg class="" width="24px" height="24px" viewBox="0 0 24 24" fill="#6f6f6f" focusable="false"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M0 0h24v24H0z" fill="none"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
            Recentes
            </NavButton>
            
        </Container>
    )
} 

export default Navigator