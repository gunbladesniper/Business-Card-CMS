export const login = (user)=>{
	return{
		type: 'CHANGE_USER',
		payload: user
	}
}

export const newCard = (card)=>{
	return{
		type: 'ADD_CARD',
		payload: card
	}
}

export const deleteCard = (cards)=>{
	return{
		type: 'DELETE_CARD',
		payload: cards
	}
}

export const logout = ()=>{
	return{
		type: 'LOG_OUT',
	}
}