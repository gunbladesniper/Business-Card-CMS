import React from 'react';
import {bindActionCreators} from 'redux';
import{connect} from 'react-redux';
import { changeCurrentCard, changeCards, addCard, deleteCard } from '../actions/cardEditorActions';
import { login, logout } from '../actions/userActions';
import axios from 'axios';
import { Nav , Navbar, Button, Jumbotron } from 'react-bootstrap';

import UserCardDropdown from '../components/UserCardDropdown';
import UserLoginForm from '../components/UserLoginForm';

require('../../public/style/header.scss');

class Header extends React.Component{
  constructor(props){
    super(props)

    this.state={
      usernameInput: '',
      passwordInput: ''
    }
  }

  handleSubmit(){
    axios.get('/user/login',{
      params: {
        username: this.state.usernameInput,
        password: this.state.passwordInput
      }
    })
    .then((res)=>{
      this.props.login({
        username: res.data[0].username,
        user_id: res.data[0].id
      })
      this.props.changeCards(res.data.map((card)=>{
        return parseObj(card);
      }));
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  handleCardChange(card){
    this.props.changeCurrentCard(card);
  }

  handleUsernameInputChange(value){
    this.setState({
      usernameInput:value,
      passwordInput: this.state.passwordInput
    })
  }

  handlePasswordInputChange(value){
    this.setState({
      usernameInput: this.state.usernameInput,
      passwordInput: value
    })
  }

  insertCard(){
    axios.get('user/nextId')
    .then((results)=>{

      this.props.addCard(results.data[0].id);
    });
  }

  removeCard(){
    axios.delete(`/user/deleteCard?ID=${this.props.cards.currentCard.id}`)
    .then((res)=>{
      var index = this.props.cards.cards.indexOf(this.props.cards.currentCard);
      this.props.cards.cards.splice(index, 1);
      this.props.deleteCard(this.props.cards.cards);
      if(this.props.cards.cards.length > 0){
        this.props.changeCurrentCard(this.props.cards.cards[0]);
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  saveCard(){
    axios.post('/user/saveCard',{
      card: this.props.cards.currentCard,
      user: this.props.user
    })
    .then((res)=>{
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  render(){
    return(
      <Navbar id='app-header'>
      <Navbar.Header className ='nav-header'><h2>Business Card Manager</h2></Navbar.Header>
        {this.props.user.loggedIn &&
          <div id='card-options'>
          <Button onClick={this.props.logout}>Logout</Button>
          <Button onClick={this.insertCard.bind(this)}>Add Card</Button>
          <Button onClick={this.removeCard.bind(this)}>Delete Card</Button>
          <Button onClick={this.saveCard.bind(this)}>Save Card</Button>
          </div>
        }
        <Nav>
          { !this.props.user.loggedIn && <UserLoginForm
            handleUsernameInputChange={this.handleUsernameInputChange.bind(this)}
            handlePasswordInputChange={this.handlePasswordInputChange.bind(this)}
            username={this.state.usernameInput}
            password={this.state.passwordInput}
            handleSubmit={this.handleSubmit.bind(this)}
            loggedIn={this.props.user.loggedIn}/>}

          {this.props.user.loggedIn && <UserCardDropdown cards={this.props.cards.cards} handleCardChange={this.handleCardChange.bind(this)}/>}
        </Nav>

      </Navbar>
    )
  }
}

function mapStateToProps(state){
  return{
    cards: state.cards,
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    changeCurrentCard: changeCurrentCard,
    changeCards: changeCards,
    addCard: addCard,
    login: login,
    logout: logout,
    deleteCard: deleteCard
  },dispatch)
}

function parseObj(obj){
  var templateOptions = {
    templatename:true,
    image: true,
    namestyle: true,
    titlestyle: true,
    address1style: true,
    address2style: true,
    emailstyle: true,
    phonestyle: true,
    webstyle: true,
    templateid: true
  }
  var result = {
    template:{}
  }

  for(var key in obj){
    if(templateOptions[key]){
      result.template[key] = obj[key];
    }else{
      result[key] = obj[key];
    }
  }
  return result;
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);