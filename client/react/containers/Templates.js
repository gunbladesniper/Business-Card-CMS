import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTemplates } from '../actions/templateActions';
import TemplateButton from '../components/TemplateButton';

require('../../public/style/templates.scss');

class Templates extends React.Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		this.props.setTemplates({
  templates:[`<div id='card-template-1'>
      <div class='template-1-name'><span class='name-input'>Name</span></div>
      <div class='template-1-title'> <span class='title-input' >Title</span> </div>
      <div class='template-1-address1'> <span class='address1-input'>Address1</span> </div>
      <div class='template-1-address2'> <span class='address2-input'>Address2</span> </div>
      <div class='template-1-email'> <span class='email-input'>Email</span> </div>
      <div class='template-1-phone'> <span class='phone-input'>Phone</span> </div>
      <div class='template-1-web'> <span class='web-input'>Web</span> </div>
    </div>`,
    `<div id='card-template-2'>
      <div class='template-2-name'><span class='name-input'>Name</span></div>
      <div class='template-2-title'> <span class='title-input' >Title</span> </div>
      <div class='template-2-address1'> <span class='address1-input'>Address1</span> </div>
      <div class='template-2-address2'> <span class='address2-input'>Address2</span> </div>
      <div class='template-2-email'> <span class='email-input'>Email</span> </div>
      <div class='template-2-phone'> <span class='phone-input'>Phone</span> </div>
      <div class='template-2-web'> <span class='web-input'>Web</span> </div>
    </div>`]
})
	}

	render(){
		return(
			<div id='app-templates'>
			{this.props.templates.map((template, index)=>{
				return <TemplateButton key={index} template={template}/>
			})}
			</div>
		)
	}

}

function mapStateToProps(state){
	return{
		templates: state.templates.templates
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		setTemplates: setTemplates
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Templates);