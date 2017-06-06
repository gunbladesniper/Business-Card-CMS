import React from 'react';
function innerHTML(template){
	return {__html: template}
}
const TemplateButton = (props)=>{
	return(
		<div
		dangerouslySetInnerHTML={innerHTML(props.template)}
		onClick={()=>{props.changeTemplate(props.template)}}
		/>
	)
}

export default TemplateButton;