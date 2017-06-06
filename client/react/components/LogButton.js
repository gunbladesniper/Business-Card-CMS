import React from 'react';


function LogButton(props){
	return(
		<button className='header-button'
		onClick={()=>{
			props.onClick ?
			props.onClick(props.target) : null;
		}}>
			{props.username}
		</button>
	)
}

export default LogButton