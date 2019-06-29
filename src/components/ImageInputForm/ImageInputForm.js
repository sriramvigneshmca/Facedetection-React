import React from 'react';
import './ImageInputForm.css';
const ImageInputForm=({onInputChange,onButtonClick})=>{
	return(
		<div>
		<div className="tc">
		<p className="f3">{'This Image Will detect face from picture'}</p>
		</div>
		<div className="gback center form">
		<div className=" pa4 br3 shadow-5">
		<input type="text" className="f4 pa2 w-100" onChange={onInputChange}/><br/><br/>
		<button className="pa2 dib white bg-red w-100  grow" onClick={onButtonClick}>Detect</button>
		</div>
		</div>
		</div>
		)
}
export default ImageInputForm;