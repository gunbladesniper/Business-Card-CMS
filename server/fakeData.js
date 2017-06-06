exports.templates = {
  templates:[`<div id='card-template-1'>
      <div class='template-1-name'><span class='name-input'>Name</span></div>
      <div class='template-1-title'> <span class='title-input' Title</span> </div>
      <div class='template-1-address1'> <span class='address1-input' Title</span> </div>
      <div class='template-1-address2'> <span class='address2-input' Title</span> </div>
      <div class='template-1-email'> <span class='email-input' Title</span> </div>
      <div class='template-1-phone'> <span class='phone-input' Title</span> </div>
      <div class='template-1-web'> <span class='web-input' Title</span> </div>
    </div>`,
    `<div id='card-template-2'>
      <div class='template-2-name'><span class='name-input'>Name</span></div>
      <div class='template-2-title'> <span class='title-input' Title</span> </div>
      <div class='template-2-address1'> <span class='address1-input' Title</span> </div>
      <div class='template-2-address2'> <span class='address2-input' Title</span> </div>
      <div class='template-2-email'> <span class='email-input' Title</span> </div>
      <div class='template-2-phone'> <span class='phone-input' Title</span> </div>
      <div class='template-2-web'> <span class='web-input' Title</span> </div>
    </div>`]
}

exports.users = {
  1: {
    id: 1,
    username: 'John',
    password: 'Wily',
  }
}

exports.cards = {
  1:[
    {
      name: 'John Wily ',
      template: 1,
      title: 'Software Engineer',
      address1: '1234 5th St',
      address2: null,
      email: ' johnwily@mail.c',
      phone: '555-555-5555',
      web: 'jwily.c'
    },
    {
      name: 'John Wily ',
      template: 2,
      title: 'Software Engineer',
      address1: '1234 5th St',
      address2: null,
      email: ' johnwily@mail.c',
      phone: '555-555-5555',
      web: 'jwily.c'
    },
    {
      name: 'John Wily ',
      template: 3,
      title: 'Software Engineer',
      address1: '1234 5th St',
      address2: null,
      email: ' johnwily@mail.c',
      phone: '555-555-5555',
      web: 'jwily.c'
    }
  ]

}