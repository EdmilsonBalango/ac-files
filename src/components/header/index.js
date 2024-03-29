import React, {  useState } from 'react';
import { Container, Logo, Profile, SearchBar, Filter, ListFilter, OptionsList } from '../header/style';
import logo from '../../assets/images/logo.png'
import docs from '../../assets/images/extensions/docs.png'
import sheet from '../../assets/images/extensions/sheets.png'
import csv from '../../assets/images/extensions/csv.png' 
import pdf from '../../assets/images/extensions/pdf.png' 
import axios from 'axios';




const Header= () => {

  const [toogleFilter, setToggleFilter] = useState(false)
  const [ Results, setResults ] = useState([])

  async function handleSearch(text){
    if(text === '' || text === ' '){
      setToggleFilter(false)

    }else{
      setToggleFilter(true)
      const data = {
        keyword: text.trim(),
        user: localStorage.getItem('@user_id')
      }

      axios.post('https://ac-file-backend.herokuapp.com/search', data).then(response =>{
        setResults(response.data)
      }) 
    }

  }



  return (
    <Container>
      <Logo src={logo}/>
      <SearchBar style={{backgroundColor: 'rgba(0,0,0,.05)', display: 'flex', alignItems: 'center', }}>
        <button>
          <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#6f6f6f"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg>
        </button>
        <input onChange={text => handleSearch(text.target.value)} />
        <button onClick={()=> setToggleFilter(!toogleFilter)}>
          <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" fill="#6f6f6f"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg>
        </button>
        {toogleFilter && 
        <Filter>
          {/* <OptionsList>
          <button>
            <img src={pdf} />
          </button>
          <button>
            <img src={docs} />
          </button>
          <button>
            <img src={sheet} />
          </button>
          <button>
            <img src={csv} />
          </button>
          </OptionsList> */}
          {Results &&<ListFilter>
            {Results.map(f =>{ 
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
            return (
              <button key={f.id_file} style={{display: 'flex', justifyContent: 'space-around'}}>
              <img src={treathIcon()} width={30} /><strong>{f.file_name}</strong>
            </button>
            )})}                         
          </ListFilter>}
        </Filter>}
      </SearchBar>
      <Profile >
      <svg class=" a-s-fa-Ha-pa" width="24px" height="24px" viewBox="0 0 24 24" fill="#6f6f6f" focusable="false"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>
      </Profile>
    </Container>
  );
  }

  export default Header;

