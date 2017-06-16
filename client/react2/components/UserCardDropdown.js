import React from 'react';
import { NavDropdown, MenuItem} from 'react-bootstrap';


const UserCardDropdown =(props)=>{
  return(
    <NavDropdown eventKey={1} title="User Cards" id='nav-dropdown'>
    {props.cards.map((card,index)=>{
      return <MenuItem key={index} eventKey={Number(`1.${index + 1}`)} onClick={()=>{props.handleCardChange(props.cards[index])}}>{card.title}</MenuItem>
    })}
    </NavDropdown>
  )
}

export default UserCardDropdown;