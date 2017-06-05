const initialTemplates = {};

export default function(state = initialTemplates, action){

  switch(action.type){
    case 'ADD_TEMPLATES':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}