import React from 'react';


const TemplateButton =(props)=>{
	return(
		<div onClick={()=>{props.handleClick(props.template)}}> {props.template.name}</div>
	)
}



export default TemplateButton;