import React from 'react';


function LogButton(props){
	return(
		<button className='header-button'>
			{props.username}
		</button>
	)
}

export default LogButton