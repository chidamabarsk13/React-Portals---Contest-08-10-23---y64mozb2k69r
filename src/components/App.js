import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
  const [inputValue, setInputValue]=useState('');

  const handleButtonClick= () => {
    ReactDOM.createPortal(
      inputValue,
      document.getElementById('portal-textfield')
    );
  };



  return (
    
    <div id="main">
      <input type='text' id="input" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input><br/>
      <div id="portal-button">
      <PortalButton buttonclick={handleButtonClick} /><br/>
      </div>
      <div id="portal-textfield">
      <PortalTextArea />
      </div>
    </div>
  )
}


export default App;
