import React from 'react';
import './Navigation.css'
const Navigation=({OnRouterChange,Issign})=>{
	if(Issign){
		return(
			<nav className="f3 link dim black underline pa3 pointer" style={{display:'flex',justifyContent:'flex-end'}}>
		
			<p onClick={()=>{OnRouterChange("signin")}}>signout</p>
		
		</nav>
			)
	}else{
		return(
			<nav className="f3 link dim black underline pa3 pointer" style={{display:'flex',justifyContent:'flex-end'}}>
		<p onClick={()=>{OnRouterChange("signup")}}>signup</p>
		<p onClick={()=>{OnRouterChange("signin")}}>signin</p>
		</nav>
			)

	}

		
		
		
}
export default Navigation;