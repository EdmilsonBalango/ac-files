import React, { useState, useEffect } from 'react'
import { Container, LogCard, Form } from './style'
import logo from '../../assets/images/logo.png'
import axios from 'axios'

const Login =()=> {

    const [ userCode, setUserCode ] =  useState()

    async function verifyCode(){
        const data = {
            code: userCode
        }
        await axios.post('http://localhost:3001/login', data, (result)=>{
            return console.log(result)
        })

    } 

    return(
        <Container>
            <LogCard>
                <img alt={"ac-files"} src={logo} />
                <Form>
                    <input placeholder={'Digite seu pin'} onChange={text => setUserCode(text.target.value)} />
                    <button onClick={()=>verifyCode()} >Entrar</button>
                </Form>
                <div>
                    <strong>Problemas com login?</strong>
                </div>
            </LogCard>
        </Container>
    )
}

export default Login

