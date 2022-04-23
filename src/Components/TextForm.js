import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // to convert to upper case letter
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleLoClick = () =>{
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const[text,setText] = useState('Enter Text Here');
  return (
    <>
    <div className='container'> 
    <h1>{props.heading}</h1>
    <div className="mb-3"> 
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
</div>
<div className='container my-5'>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>

</div>
    </>
  )
}
