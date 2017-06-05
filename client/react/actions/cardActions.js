export const setName = (name)=>{
	return {
		type: 'UPDATE_NAME',
		payload: name
	}
}

export const setTitle = (title)=>{
	return {
		type: 'UPDATE_TITLE',
		payload: title
	}
}

export const setAddress1 = (address1)=>{
	return {
		type: 'UPDATE_ADDRESS1',
		payload: address1
	}
}

export const setAddress2 = (address2)=>{
	return {
		type: 'UPDATE_ADDRESS2',
		payload: address2
	}
}

export const setEmail = (email)=>{
	return {
		type: 'UPDATE_EMAIL',
		payload: email
	}
}

export const setPhone = (phone)=>{
	return {
		type: 'UPDATE_PHONE',
		payload: phone
	}
}

export const setWeb = (web)=>{
	return {
		type: 'UPDATE_WEB',
		payload: web
	}
}

export const setTemplate = (template)=>{
	return {
		type: 'UPDATE_TEMPLATE',
		payload: template
	}
}

export const setCard = (card)=>{
	return {
		type: 'CHANGE_CARD',
		payload: card
	}
}