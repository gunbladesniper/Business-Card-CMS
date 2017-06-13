const initialSettings ={
	username: '',
	user_id: null,
	loggedIn: false
}

export default function(state = initialSettings, action){
	switch(action.type){
		case 'USER_LOGIN':
			return Object.assign({}, state, {
				username:action.payload.username,
				user_id: action.payload.user_id,
				loggedIn: true
			})
		case 'USER_LOGOUT':
			return Object.assign({},initialSettings)
		default:
			return state
	}
}