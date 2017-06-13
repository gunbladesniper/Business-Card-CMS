const initialTemplates={
	templates:[]
}

export default function(state=initialTemplates, action){
	switch(action.type){
		case 'LOAD_TEMPLATES':
			return Object.assign({}, state,{
				templates: action.payload
			})
		default:
			return state
	}
}