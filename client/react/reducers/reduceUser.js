const initialUser = {
  username: 'BobDobbs',
  cards: [
    {
      name: 'Robert Dobbs',
      title: 'Subgenious',
      address1: '123 4th st',
      address2: 'Apt z',
      email: 'bobbydobby@a.b',
      phone: '555-555-5555',
      web:'cotsg.c',
      template: '1'
    }
  ],
  loggedIn: false,
}

export default function(state = initialUser, action){

  switch(action.type){
    case 'CHANGE_USER':
      return Object.assign({}, state, action.payload,{
        loggedIn: true
      })
    case 'ADD_CARD':
      return Object.assign({}, state, {
        cards: [...state.cards, action.payload]
      })
    case 'DELETE_CARD':
      return Object.assign({}, state, {
        cards: action.payload
      })
    case 'LOG_OUT':
      return Object.assign({}, state, initialUser)
    default:
      return state
  }
}