import React from 'react';
import './bio.css'

const Bio = ({ photo, title, text }) => {
  return (
    <div className="bio">
      <img className="bio-photo "src={photo} alt="Bio-Photo" />
      <div>
      <h2 className="bio-title">{title}</h2>
      <p className="bio-text ">{text}</p>
      </div>
     
    </div>
  );
};

export default Bio;
