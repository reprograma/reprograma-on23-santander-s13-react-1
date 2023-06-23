import React from "react";
import './card.css'

const Card = ({ photo, title, text }) => {
    return (
      <div className="card">

        <h3>{title}</h3>
        <img src={photo} alt="Card Photo" />
        <p>{text}</p>
        
      </div>
    );
  };
  
  export default Card;