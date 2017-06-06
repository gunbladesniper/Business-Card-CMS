import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTemplates } from '../actions/templateActions';
import { setTemplate } from '../actions/cardActions';
import TemplateButton from '../components/TemplateButton';

import axios from 'axios';
require('../../public/style/templates.scss');

class Templates extends React.Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		axios.get('/templates')
		.then((results)=>{
			this.props.setTemplates(results.data);
		})
	}

	render(){
		return(
			<div id='app-templates'>
			{this.props.templates.map((template, index)=>{
				return <TemplateButton key={index} template={template} changeTemplate={this.props.setTemplate.bind(this)}/>
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
		setTemplates: setTemplates,
		setTemplate: setTemplate
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Templates);