import React from 'react';
import {bindActionCreators} from 'redux';
import{connect} from 'react-redux';
import { login, newCard, deleteCard, logout } from '../actions/userActions';

import LogButton from '../components/LogButton';

require('../../public/style/header.scss');

var testUser={
	userName: 'Savaughn',
	cards: [
		{
      name: 'Savaughn Jones',
      title: 'Software Engineer',
      address1: '555 5th st',
      address2: 'Apt 5',
      email: 'Savaughn@a.b',
      phone: '555-555-5555',
      web:'Savaughn.c',
      template: '1'
    }
	]
}

class Header extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id='app-header'>
			<h3 className='header-text'>Header goes here</h3>
			{
				this.props.user.loggedIn ?
				<LogButton username={this.props.user.username} />
				:
				<LogButton username='login'
				onClick={this.props.login.bind(this)} target={testUser}/>
			}
			{this.props.user.loggedIn && <LogButton username='Logout'
				onClick={()=>{this.props.logout()}}
			/>}
			</div>
		)
	}

}

function mapStateToProps(state){
	return {
		user: state.user
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		login: login,
		newCard: newCard,
		deleteCard: deleteCard,
		logout: logout
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);