export const login = (userDetails)=>{
	return{
		type: 'USER_LOGIN',
		payload: userDetails
	}
}

export const logout =()=>{
	return {
		type: 'USER_LOGOUT',
	}
}