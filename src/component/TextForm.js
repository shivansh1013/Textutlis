import React,{useState} from 'react'

export default function TextForm(props) {
  const handlelowerclick=()=>{
    console.log(" Lower case clicked");
    let newtextt=text.toLowerCase();

    setText(newtextt);
    props.showalert(" Converted to lower case","success");
  }
  const handlecopy=()=>
  {
    var newtt= document.getElementById("mybox");
    newtt.select();
    navigator.clipboard.writeText(newtt.value);

    props.showalert(" TextCopied","success");
   

  }

  const handleUpperclick=()=>{
    console.log(" uppercase was clicked","success");
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert(" Converted to Upper case","success");
  }
  const handleclearclick=()=>{
    console.log("clear text");
    let newtext='';
    setText(newtext);
    props.showalert("Text cleared","success");
  }
  
  const handleonchange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  
  const [text,setText]=useState('');
  return (
    <>
<div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  
 <textarea className="form-control" value={text}  onChange={handleonchange}   style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2"  onClick={handleUpperclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handlelowerclick}>convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleclearclick}>clear text</button>

<button className="btn btn-primary mx-2" onClick={handlecopy}>copy text</button>
  </div>
  <div className="container " style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"enter your text to preview it"}</p>

  </div>
 
  </>
  )
}
