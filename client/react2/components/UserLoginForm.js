import React from 'react';

import {Navbar , FormControl, Button} from 'react-bootstrap';

const UserLoginForm =(props)=>{
	return(
		<Navbar.Form className='login-form'>
			<FormControl
				type='text'
				id='username-input'
				value={props.username}
				onChange={(e)=>{
					props.handleUsernameInputChange(e.target.value);
				}}
				placeholder='username'/>
			<FormControl
				type='text'
				id='password-input'
				value={props.password}
				onChange={(e)=>{
					props.handlePasswordInputChange(e.target.value);
				}}
				placeholder='password'/>

			<Button type='submit' onClick={props.handleSubmit}>Login</Button>
		</Navbar.Form>
	)
}

export default UserLoginForm;