import React from 'react';
import { Col, Image } from 'react-bootstrap';

const TemplateButton =(props)=>{
  return(
    <div
    className='card-template'
    onClick={()=>{props.handleClick(props.template)}}>
      <Image src={props.template.image}/>
      <div className={`${props.template.namestyle}-${props.template.id}`}>
        {props.template.namestyle}
      </div>
      <div className={`${props.template.titlestyle}-${props.template.id}`}>
        {props.template.titlestyle}
      </div>
      <div className={`${props.template.address1style}-${props.template.id}`}>
        {props.template.address1style}
      </div>
      <div className={`${props.template.address2style}-${props.template.id}`}>
        {props.template.address2style}
      </div>
      <div className={`${props.template.emailstyle}-${props.template.id}`}>
        {props.template.emailstyle}
      </div>
      <div className={`${props.template.phonestyle}-${props.template.id}`}>
        {props.template.phonestyle}
      </div>
      <div className={`${props.template.webstyle}-${props.template.id}`}>
        {props.template.webstyle}
      </div>
    </div>
  )
}



export default TemplateButton;