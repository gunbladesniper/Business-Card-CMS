import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setName, setTitle, setAddress1, setAddress2, setEmail, setPhone, setWeb, setTemplate, setCard } from '../actions/cardActions';

require('../../public/style/textEdit.scss');

class TextEdit extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id='app-text-edit'>
      Edit Text<br/>
        <input type='text' name='fullname'
        onChange={(e)=>{ this.props.setName(e.target.value)}}
        /><br/>
        <input type='text' name='title'
        onChange={(e)=>{ this.props.setTitle(e.target.value)}}
        /><br/>
        <input type='text' name='address1'
        onChange={(e)=>{ this.props.setAddress1(e.target.value)}}
        /><br/>
        <input type='text' name='address2'
        onChange={(e)=>{ this.props.setAddress2(e.target.value)}}
        /><br/>
        <input type='text' name='email'
        onChange={(e)=>{ this.props.setEmail(e.target.value)}}
        /><br/>
        <input type='text' name='phone'
        onChange={(e)=>{ this.props.setPhone(e.target.value)}}
        /><br/>
        <input type='text' name='web'
        onChange={(e)=>{ this.props.setWeb(e.target.value)}}
        /><br/>
      </div>
    )
  }

}

function mapStateToProps(state){
  return{
    card: state.card
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    setName: setName,
    setTitle: setTitle,
    setAddress1: setAddress1,
    setAddress2: setAddress2,
    setEmail: setEmail,
    setPhone: setPhone,
    setWeb: setWeb,
    setTemplate: setTemplate,
    setCard: setCard
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TextEdit);