import React, { useState, useEffect, useRef } from 'react'
import { Container, LogCard, Form, AnimationArea } from './style'
import Lottie from 'lottie-web'
import { MdError } from 'react-icons/md'
import logo from '../../assets/images/logo.png'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login =()=> {

    const [ userCode, setUserCode ] =  useState()
    const [ userId, setUserId ] = useState(1)
    const [users, setUsers] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [errorLogin, setLoginerror] =  useState(false)
    const history = useHistory()
    const element = useRef(null)
    async function verifyCode(){
        const data = {
            code: userCode,
            user_id: Number(userId)
        }
        setIsLoading(true)
        await axios.post('http://localhost:3001/login', data).then(response => {
            
            if(response.data.length > 0){
                const {id_user} = response.data[0]
                setLoginerror(false)
                localStorage.setItem('@user_id', id_user)
                history.push('/cloud')
                
            }else {
                setLoginerror(true)
            }
            setIsLoading(false)
            // console.log(response.data.length)
        })
        
    } 

    async function getUsers(){
        axios.get('http://localhost:3001/users').then(response => {
            setUsers(response.data)
        })
    }

    useEffect(()=>{
        getUsers()

        Lottie.loadAnimation({
            container: element.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/animations/loading.json'),
            rendererSettings: {
                
            }
        })
    },[])

    return(
        <Container>
            <LogCard>
                <img alt={"ac-files"} src={logo} />
                <Form>
                    <select onChange={event => setUserId(event.target.value)}>
                        {users.map( u => {
                            return(
                                <option value={u.id_user} key={u.id_user}>{u.name_user}</option>
                            )
                        })}
                    </select>
                    <input placeholder={'Digite seu pin'} onChange={text => setUserCode(text.target.value)} />
                    <button onClick={()=>verifyCode()} >Entrar</button>
                    {errorLogin && <div>
                    <p>Pin serrado, tente novamente</p>
                    <MdError size={15} color={'#BF0404'} />
                    </div>}
                    {isLoading && <AnimationArea ref={element} />}
                </Form>
                <div>
                    <strong>Problemas com login?</strong>
                </div>
            </LogCard>
        </Container>
    )
}

export default Login

