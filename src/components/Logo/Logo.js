import React from 'react';
import Tilt from 'react-tilt'
import Smart from './Smart.png';
const Logo=()=>{
	return(
		<div>
			<Tilt className="Tilt ma4 mt0 br2 shadow-2" options={{ max : 25 }} style={{ height: 130, width: 150 }} >
 		<div className="Tilt-inner"> <img src={Smart} alt='Brain' style={{ height: 130, width: 150 }}/></div>
</Tilt>

		</div>
		)
}
export default Logo;