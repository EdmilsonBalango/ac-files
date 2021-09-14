import axios from 'axios';
import React, { Component } from 'react';
import { MdCreateNewFolder} from 'react-icons/md'
import { withRouter } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'
import { Container, NewBagName,ActionButtons} from "./style";




class Toolbar extends Component {
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
        let bagName = this.state.value.trim()

        function treathName(){
            if(bagName === 0){
                return 'New folder'
            }
            return bagName
        }
            
        const data = {
            mother_bag_id: current,
            bag_name: treathName()
            
        }
        // https://ac-file-backend.herokuapp.com/
        await axios.post('https://ac-file-backend.herokuapp.com/createBag', data).then(response => {
            console.log(response.data)
            this.setState({createBag: false})
            this.setState({value: ''})
        })
    }

    

  render() {
    const {current, motherBag, folderName} = this.props
    const { history } =  this.props
    // console.log(current)
    return (
        <Container>
        {Number(current) === 1 ? null : <button onClick={()=> history.push(`/cloud/explore/${motherBag}`)}>
            <BiArrowBack size={25} /> <strong>{folderName}</strong>
        </button>}
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

export default withRouter(Toolbar)