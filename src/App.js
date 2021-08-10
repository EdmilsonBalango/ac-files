import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import { darkTheme, lightTheme } from './themes';
import {GlobalStyles} from './global/styles'
import Board from './components/board';
import { BrowserRouter } from 'react-router-dom';



function App() {

  const [theme, setTheme] = useState('light')

  // const themeTrigger = () =>{
  //   theme === 'light' ? setTheme('dark') : setTheme('light');
  // };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Board />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
