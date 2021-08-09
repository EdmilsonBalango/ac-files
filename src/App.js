import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import { darkTheme, lightTheme } from './themes';
import {GlobalStyles} from './global/styles'
import Board from './components/board';



function App() {

  const [theme, setTheme] = useState('light')

  // const themeTrigger = () =>{
  //   theme === 'light' ? setTheme('dark') : setTheme('light');
  // };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Board />
    </ThemeProvider>
  );
}

export default App;
