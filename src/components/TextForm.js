import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
   
     let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(
      "UpperCase has been enabled",
      "success"
    )
  };

  const handleLowClick = ()=>{
    
     let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(
      "LowerCase has been enabled",
      "success"
    )
  };


  const handleOnChange = (event)=>{
    setText(event.target.value);

  }
  const handleClearClick = ()=>{
    setText('');
    props.showAlert(
      "Text has been ",
      "success"
    )
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(
      "Copied to ClipBoard!",
      "success"
    )
  };


   const[text,setText] = useState('');

// //    text = "wrong way to update Text value";// wrong way 
//    setText("Enter text using setText");//correct way
    return (
        <>
  <div className="form-floating " style={{color:props.mode==='dark' ?'white':'#042743'}}>
        <h1>{props.heading}</h1>
  <textarea className="form-control" placeholder="Leave a comment here" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ?'grey':'white',color:props.mode==='dark' ?'white':'#042743'}}id="myBox" ></textarea>
  <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleCopyToClipboard}>
          Copy to Clipboard
        </button>

</div>
<div className="container my-3" style={{color:props.mode==='dark' ?'white':'#042743'}}>
    <h1>Your text summary</h1>
    <p> {text.trim() === '' ? '0' : text.trim().split(/\s+/).length} words and {text.length} characters</p>
    <p>{text.trim() === '' ? '0 Minutes to read '  : `${(0.008 * text.trim().split(/\s+/).length).toFixed(2)} Minutes to read`}</p>

    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textArea to preview it here"}</p>
</div>

</>
  )
}
