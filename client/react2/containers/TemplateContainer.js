import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import axios from 'axios';

import { changeTemplate, loadTemplates} from '../actions/cardEditorActions';
import TemplateButton from '../components/TemplateButton';

require('../../public/style/templates.scss');

class TemplateContainer extends React.Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		axios.get('/templates')
		.then((results)=>{
			this.props.loadTemplates(results.data);
		})
	}

	handleTemplateChange(template){
		this.props.changeTemplate(changeCurrentTemplate(this.props.cards.currentCard, template))
	}

	render(){
		return(
			<Row>
				<div id='template-container'>
				{this.props.cards.templates.map((template, index)=>{
					return <TemplateButton key={index} index={index}templates={this.props.cards.templates.slice()} template={template} handleClick={this.handleTemplateChange.bind(this)}/>
				})}
				</div>
			</Row>
		)
	}
}

function mapStateToProps(state){
	return{
		cards: state.cards
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loadTemplates: loadTemplates,
		changeTemplate: changeTemplate
	}, dispatch)
}

function changeCurrentTemplate(card, template){
	card.template = Object.assign({}, template);
	return card.template;
}


export default connect(mapStateToProps, mapDispatchToProps)(TemplateContainer)