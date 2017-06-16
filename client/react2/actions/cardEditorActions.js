export const changeCurrentCard =(card)=>{
  return {
    type: 'CHANGE_CURRENT_CARD',
    payload: card
  }
}

export const changeCards =(cards)=>{
  return{
    type: 'CHANGE_CARDS',
    payload: cards
  }
}

export const addCard =(cardId)=>{
  return {
    type: "ADD_CARD",
    payload: {
      name: 'name',
      id: Number(cardId) + 1,
      title: 'title',
      address1: 'address1',
      address2: 'address2',
      email:'email',
      phone:'phone',
      web:'web',
      template: {
        templateid: 1,
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
    }
  }
}
export const deleteCard =(cards)=>{
  return {
    type: 'DELETE_CARD',
    payload: cards
  }
}
export const changeTemplate =(template)=>{
  return {
    type: 'CHANGE_TEMPLATE',
    payload: template
  }
}
export const loadTemplates =(templates)=>{
  return{
    type: 'LOAD_TEMPLATES',
    payload: templates
  }
}