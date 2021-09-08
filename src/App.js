import React , {useState} from 'react';

import './App.css';
import Signin from './component/Signin';
import { ThemeProvider } from '@chakra-ui/system';
import theme from '@chakra-ui/theme';
import Signup from './component/Signup';
function App() {
const [clicked , setclicked] = useState(false)
const changeState = ()=>{
  setclicked(!clicked)
}
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="forms-container">
          <Signin changeState ={changeState} clicked ={clicked}/>
          <Signup changeState ={changeState} clicked ={clicked}/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
