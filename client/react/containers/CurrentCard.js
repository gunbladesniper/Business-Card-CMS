import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
require('../../public/style/currentCard.scss');

var test=`<div id='card-template-1'>
      <div class='template-1-name'><span class='name-input'>Name</span></div>
      <div class='template-1-title'> <span class='title-input' Title</span> </div>
      <div class='template-1-address1'> <span class='address1-input' Title</span> </div>
      <div class='template-1-address2'> <span class='address2-input' Title</span> </div>
      <div class='template-1-email'> <span class='email-input' Title</span> </div>
      <div class='template-1-phone'> <span class='phone-input' Title</span> </div>
      <div class='template-1-web'> <span class='web-input' Title</span> </div>
    </div>`

class CurrentCard extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var card = document.querySelector('#app-card');
		card.innerHTML = test;
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