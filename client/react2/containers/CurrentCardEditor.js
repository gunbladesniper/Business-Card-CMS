import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCurrentCard } from '../actions/cardEditorActions';

import { FormGroup , FormControl , Col} from 'react-bootstrap';
require('../../public/style/textEdit.scss');

class CurrentCardEditor extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<Col md={6}>
			<div id="app-text-edit">
			<form>
				<FormGroup>
					<FormControl
					type='text'
					value={this.props.cards.currentCard.name}
					placeholder='enter name'
					onChange={(e)=>{this.props.changeCurrentCard(changeCurrentCardName(this.props.cards.currentCard, e.target.value))}}/>
					<FormControl
					type='text'
					value={this.props.cards.currentCard.title}
					placeholder='enter title'
					onChange={(e)=>{this.props.changeCurrentCard(changeCurrentCardTitle(this.props.cards.currentCard, e.target.value))}}/>
					<FormControl
					type='text'
					value={this.props.cards.currentCard.address1}
					placeholder='enter Address line 1'
					onChange={(e)=>{this.props.changeCurrentCard(changeCurrentCardAddress1(this.props.cards.currentCard, e.target.value))}}/>
					<FormControl
					type='text'
					value={this.props.cards.currentCard.address2}
					placeholder='enter Address line 2'
					onChange={(e)=>{this.props.changeCurrentCard(changeCurrentCardAddress2(this.props.cards.currentCard, e.target.value))}}/>
					<FormControl
					type='text'
					value={this.props.cards.currentCard.email}
					placeholder='enter email'
					onChange={(e)=>{this.props.changeCurrentCard(changeCurrentCardEmail(this.props.cards.currentCard, e.target.value))}}/>
					<FormControl
					type='text'
					value={this.props.cards.currentCard.phone}
					placeholder='enter phone number'
					onChange={(e)=>{this.props.changeCurrentCard(changeCurrentCardPhone(this.props.cards.currentCard, e.target.value))}}/>
					<FormControl
					type='text'
					value={this.props.cards.currentCard.web}
					placeholder='enter phone website/ other'
					onChange={(e)=>{this.props.changeCurrentCard(changeCurrentCardWeb(this.props.cards.currentCard, e.target.value))}}/>
				</FormGroup>
			</form>
			</div>
			</Col>
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
		changeCurrentCard: changeCurrentCard
	},dispatch)
}

	function changeCurrentCardName(card, name){
		card.name = name;
		return card
	}

	function changeCurrentCardTitle(card, title){
		card.title = title;
		return card
	}
	function changeCurrentCardAddress1(card, address1){
		card.address1 = address1;
		return card
	}
	function changeCurrentCardAddress2(card, address2){
		card.address2 = address2;
		return card
	}
	function changeCurrentCardEmail(card, email){
		card.email = email;
		return card
	}
	function changeCurrentCardPhone(card, phone){
		card.phone = phone;
		return card
	}
	function changeCurrentCardWeb(card, web){
		card.web = web;
		return card
	}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCardEditor)

