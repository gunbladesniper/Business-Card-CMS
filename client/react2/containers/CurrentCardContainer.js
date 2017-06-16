import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCurrentCard, changeTemplate} from '../actions/cardEditorActions';
import { Image , Col } from 'react-bootstrap';

require('../../public/style/currentCard.scss');

class CurrentCardContainer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Col id='current-card-container' md={6}>
        <div id={this.props.cards.currentCard.template.templatename}>
        <Image src={this.props.cards.currentCard.template.image} responsive/>
          <div className={this.props.cards.currentCard.template.namestyle}>{this.props.cards.currentCard.name}</div>
          <div className={this.props.cards.currentCard.template.titlestyle}>{this.props.cards.currentCard.title}</div>
          <div className={this.props.cards.currentCard.template.address1style}>{this.props.cards.currentCard.address1}</div>
          <div className={this.props.cards.currentCard.template.address2style}>{this.props.cards.currentCard.address2}</div>
          <div className={this.props.cards.currentCard.template.emailstyle}>{this.props.cards.currentCard.email}</div>
          <div className={this.props.cards.currentCard.template.phonestyle}>{this.props.cards.currentCard.phone}</div>
          <div className={this.props.cards.currentCard.template.webstyle}>{this.props.cards.currentCard.web}</div>
        </div>
      </Col>
    )
  }
}

function mapStateToProps(state){
  return{
    cards: state.cards
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    changeCurrentCard: changeCurrentCard,
    changeTemplate: changeTemplate
  },dispatch)
}

function changeCurrentCardTemplate(card, template){
    card.template = template;
    return card
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCardContainer);