import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTemplates } from '../actions/templateActions';

require('../../public/style/templates.scss');

class Templates extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id='app-templates'>Templates goes here</div>
		)
	}

}

function mapStateToProps(state){
	return{
		templates: state.templates
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		setTemplates: setTemplates
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Templates);