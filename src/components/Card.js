import React from 'react'
import './Card.css'

const Card = props => (
    <div className="Card">
        <img src={props.image}/> 
        <div className="textCont">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>  
       
    </div>
)

export default Card