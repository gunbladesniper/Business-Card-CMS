const initialSetup ={
  cards:[{
    name: 'name',
    id: 'card_id',
    title: 'title',
    address1: 'address1',
    address2: 'address2',
    email:'email',
    phone:'phone',
    web:'web',
    template:{
      id: 1,
      templatename: 'app-card-1',
      image: 'images/cardbackground1.png',
      namestyle: 'name-position',
      titlestyle:'title-position',
      address1style: 'address1-positon',
      address2style: 'address2-position',
      emailstyle: 'email-position',
      phonestyle: 'phone-position',
      webstyle: 'web-position'
    }
  }],
  currentCard:{
    name: 'name',
    id:'card_id',
    title: 'title',
    address1: 'address1',
    address2: 'address2',
    email:'email',
    phone:'phone',
    web:'web',
    template: {
      id: 1,
      templatename: 'app-card-1',
      image: 'images/cardbackground1.png',
      namestyle: 'name-position',
      titlestyle:'title-position',
      address1style: 'address1-position',
      address2style: 'address2-position',
      emailstyle: 'email-position',
      phonestyle: 'phone-position',
      webstyle: 'web-position'
    }
  },
  templates:[]
}

export default function(state= initialSetup, action){
  switch(action.type){
    case 'CHANGE_CURRENT_CARD':
      return Object.assign({}, state, {
        currentCard: action.payload
      })
    case 'CHANGE_CARDS':
      return Object.assign({}, state, {
        cards: action.payload
      })
    case 'ADD_CARD':
      return Object.assign({}, state, {
        cards: [...state.cards, action.payload]
      })
    case 'DELETE_CARD':
      return Object.assign({}, state, {
        cards: action.payload
      })
    case 'CHANGE_TEMPLATE':
      return Object.assign({}, state, {
        currentCard:{
          name: state.currentCard.name,
          title: state.currentCard.title,
          address1: state.currentCard.address1,
          address2: state.currentCard.address2,
          email: state.currentCard.email,
          phone: state.currentCard.phone,
          web: state.currentCard.web,
          id: state.currentCard.id,
          template: action.payload
        }
      })
    case 'LOAD_TEMPLATES':
      return Object.assign({}, state,{
        templates: action.payload
      })
    default:
      return state
  }
}