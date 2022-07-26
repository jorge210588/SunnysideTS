import React from "react";
import './Client.scss'

const Client = (props) => {
  const { image, description, name, position } = props;
  return (
    <div className="clientProfile">
      <img className="clientPhoto" src={image} />
      <p className="clientDescription">{description}</p>
      <p className="clientName">{name}</p>
      <p className="clientPosition">{position}</p>
    </div>
  );
};

export default Client;
