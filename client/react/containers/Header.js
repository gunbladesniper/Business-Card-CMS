import React from 'react';
import {bindActionCreators} from 'redux';
import{connect} from 'react-redux';
import { login, newCard, deleteCard, logout } from '../actions/userActions';

import LogButton from '../components/LogButton';

require('../../public/style/header.scss');

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
				<LogButton username='login'/>
			}
			{this.props.user.loggedIn && <LogButton username='Logout'/>}
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