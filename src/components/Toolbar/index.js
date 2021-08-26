import axios from 'axios';
import React, { Component } from 'react';
import {MdDelete, MdCreateNewFolder} from 'react-icons/md'
import { Container, NewBagName,ActionButtons} from "./style";

export default class componentName extends Component {
    constructor(props){
        super(props);
        this.state = {value: '', createBag: false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        
    }
    async handleSubmit(event){
        event.preventDefault()
        const {current} = this.props
        const data = {
            mother_bag_id: current,
            bag_name: this.state.value
            
        }
        // console.log(data)
        await axios.post('http://localhost:3001/createBag', data).then(response => {
            console.log(response.data)
            this.setState({createBag: false})
        })
    }

  render() {
    return (
        <Container>
        <button onClick={()=> this.setState({createBag: !this.state.createBag})}>
            <MdCreateNewFolder size={30} />
        </button>
        {this.state.createBag && 
            <NewBagName>
                <input onChange={this.handleChange}></input>  
                <ActionButtons onClick={(event)=>this.handleSubmit(event)} >Criar</ActionButtons>
                <ActionButtons onClick={()=>this.setState({createBag: false})}>Cancelar</ActionButtons>
            </NewBagName>
        }
    </Container>
    );
  }
}