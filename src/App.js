import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import { darkTheme, lightTheme } from './themes';
import {GlobalStyles} from './global/styles'



function App() {

  const [theme, setTheme] = useState('light')

  const themeTrigger = () =>{
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <button onClick={()=> themeTrigger()}>Mudar</button>
      </div>

    
    </ThemeProvider>
  );
}

export default App;
