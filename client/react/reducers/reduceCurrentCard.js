const initialCard = {
	name: 'test',
	title: '',
	address1: '',
	address2: '',
	email: '',
	phone: '',
	web:'',
	template: `<div id='card-template-1'>
      <div class='template-1-name'><span class='name-input'>Name</span></div>
      <div class='template-1-title'> <span class='title-input' Title</span> </div>
      <div class='template-1-address1'> <span class='address1-input' Title</span> </div>
      <div class='template-1-address2'> <span class='address2-input' Title</span> </div>
      <div class='template-1-email'> <span class='email-input' Title</span> </div>
      <div class='template-1-phone'> <span class='phone-input' Title</span> </div>
      <div class='template-1-web'> <span class='web-input' Title</span> </div>
    </div>`
};

export default function(state = initialCard, action){

	switch(action.type){
		case 'UPDATE_NAME':
			return Object.assign({}, state, {
				name: action.payload
			})
		case 'UPDATE_TITLE':
			return Object.assign({}, state, {
				title: action.payload
			})
		case 'UPDATE_ADDRESS1':
			return Object.assign({}, state, {
				address1: action.payload
			})
		case 'UPDATE_ADDRESS2':
			return Object.assign({}, state, {
				address2: action.payload
			})
		case 'UPDATE_EMAIL':
			return Object.assign({}, state, {
				email: action.payload
			})
		case 'UPDATE_PHONE':
			return Object.assign({}, state, {
				phone: action.payload
			})
		case 'UPDATE_WEB':
			return Object.assign({}, state, {
				web: action.payload
			})
		case 'UPDATE_TEMPLATE':
			return Object.assign({}, state, {
				template: action.payload
			})
		case 'CHANGE_CARD':
			return Object.assign({}, state, action.payload);
		default:
		 return state
	}
}