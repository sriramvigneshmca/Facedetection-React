import React from 'react';
import './FaceRecognization.css';
const FaceRecognization=({imgurl,box})=>{
	return(
		<div className=" center ma">
        <div className=" tc absolute">
		<img src={imgurl} id='inputimage' alt=" " width="500px" height='auto' />
		<div className="bounding-box"  style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}>
		</div>
		</div>
		</div>
		)
}
export default FaceRecognization;

