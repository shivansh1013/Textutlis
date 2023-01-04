
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import { useState } from 'react';
// import {
  
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';

 
function App() {
 const[alert,setalert]=useState(null);
  const[mode,setmode]=useState('light');

  const togglemode=()=>
  {
  if(mode==='light')
  {
  setmode('dark');
  document.body.style.backgroundColor='#042743';
  showalert(" Dark mode enabled","success");
  }
  else
  {
  setmode('light');
  
  document.body.style.backgroundColor='white';
  showalert(" Light mode enabled","success");
  }
  }

    const showalert=(message,type)=>
   {
 setalert({
  msg:message,
  type:type
 })
 setTimeout(()=>
 {
setalert(null);
 }, 1500);
    }
 
  return (
    <>
   
<Navbar  title="myworld"  mode={mode} togglemode={togglemode}/>
 <Alert alert={alert}/>
<div className="container my-3">

{/* <Routes>
          <Route exact path="/about" element={<About />} ></Route> */}
          
          {/* < Route exact path="/" element= {<TextForm showalert={showalert} heading="write something" mode={mode} /> }> </Route>  */}
          {/* </Routes> */}
         <TextForm showalert={showalert} heading="write something" mode={mode} />

          
</div>



    </>

  );
} 

export default App;
