import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
require('../../public/style/currentCard.scss');


class CurrentCard extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		setCardData(this.props.card);
	}
	componentWillReceiveProps(nextProps){
		if(this.props.card !== nextProps){
			setCardData(nextProps.card);
		}

	}

	render(){
		return(
			<div id='app-card'>Current card goes here</div>
		)
	}

}
function mapStateToProps(state){
	return{
		card: state.card
	}
}

function setCardData(data){
		var card = document.querySelector('#app-card');
		card.innerHTML = data.template;
		var nameInput = document.querySelector('.name-input');
		var titleInput = document.querySelector('.title-input');
		var address1Input = document.querySelector('.address1-input');
		var address2Input = document.querySelector('.address2-input');
		var emailInput = document.querySelector('.email-input');
		var phoneInput = document.querySelector('.phone-input');
		var webInput = document.querySelector('.web-input');

		nameInput.innerText = data.name;
		titleInput.innerText = data.title;
		address1Input.innerText = data.address1;
		address2Input.innerText = data.address2;
		emailInput.innerText = data.email;
		phoneInput.innerText = data.phone;
		webInput.innerText = data.web;
}
export default connect(mapStateToProps)(CurrentCard);