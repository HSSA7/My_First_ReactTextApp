
// import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const[mode,setMode] = useState('light');

  const[greenMode,setGreenMode] = useState('light');

  


  const[alert,setAlert] = useState(null);
  
  const showAlert = (message,type)=>
  {
    setAlert(
      {
        msg:message,
        type: type
      }
    )
    setTimeout(()=>{
     setAlert(null);
    },1000);

  }

  const toggleMode =()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(
        "Dark Mode has been enabled",
        "success"

      );
      document.title = 'TextUtils - DarkMode';
      // setInterval(()=>{
      //   document.title = 'TextUtils - is Amazing';

      // },2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';

      // },1500);
    }
    else if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(
        "Light Mode has been enabled",
        "success"
      );
    }  
  }

  const toggleGreenMode =()=>
  {
    if(greenMode==='light')
    {
      setGreenMode('');
      document.body.style.backgroundColor = '#C3EDC0';
      showAlert(
        "Green Mode has been enabled",
        "success"
      );
    }
    else if(greenMode==='green')
    {
      setGreenMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(
        "Light Mode has been enabled",
        "success"
      );
    }  
  }


  

  
  return (
    <>

    <Navbar title="TextUtils" about="AboutTextUtils"  mode={mode} toggleMode={toggleMode} greenMode={greenMode} toggleGreenMode={toggleGreenMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
    
    
    
    </div>
    
    
    {/* <About/> */}
    
    

    </>
  );
}

export default App;
