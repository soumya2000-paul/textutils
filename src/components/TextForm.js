import React, {useState} from 'react'


export default function TextForm(props)
{
	const handleUpClick = ()=>{
		console.log("uppercase is clicked");
		setText(text.toUpperCase())
		props.showAlert("Converted to uppercase", "success");
	}
	const handleLowClick = ()=>{
		console.log("Lowercase is clicked");
		setText(text.toLowerCase());
		props.showAlert("Converted to Lowercase", "success");
	}
	const handleTitleClick = ()=>{
		console.log("Titlecase is clicked");
		let newText = text.toLowerCase().split(' ');
		 for (var i = 0; i < newText.length; i++) 
		 {
		 	newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
		 }
		setText(newText.join(' '));
		props.showAlert("Converted to Title case", "success");
	}
	const handleOnChange = (event)=>{
		console.log("on change");
		setText(event.target.value)
	}
	const handleCopy = ()=>{
		var text = document.getElementById("myBox");
		text.select();
		navigator.clipboard.writeText(text.value);
		props.showAlert("Coppied Succesfully", "success");
	}
	const handleExtraSpace = ()=>{
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
		props.showAlert("Extra Space Removed", "success");
	}
	
	const [text, setText] = useState('');
    return (
    	<>
    	<div className="container"style={{color:props.mode==='light'?'black':'white'}}>
    		<h1 >{props.heading}</h1>
			<div className="mb-3">
			<textarea className="form-control" value={text} onChange={handleOnChange} 
			style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}
			id="myBox" rows="11"></textarea>
			</div>
			<button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
			<button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
			<button className="btn btn-primary mx-1" onClick={handleTitleClick}>Convert to Titlecase</button>
			<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to clip Board</button>
			<button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        	<h1>your text summary</h1>
        	<p>{text.split(" ").length} words and {text.length} charecters </p>

        	<p>{0.08 * text.split(" ").length} minutes needed to read the article </p>
        	<h2> Preview </h2>
        	<p>{text.length>0?text:"Enter Something to Preview"}</p>
        </div>
        </>
    )
}