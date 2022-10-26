import React from "react";
import './Client.scss'

interface ClientProps{
  image:string,
  description:string,
  name:string,
  position:string
}

const Client = (props:ClientProps) => {
  const { image, description, name, position } = props;
  return (
    <div className="clientProfile">
      <img className="clientPhoto" src={image} alt="client"/>
      <p className="clientDescription">{description}</p>
      <p className="clientName">{name}</p>
      <p className="clientPosition">{position}</p>
    </div>
  );
};

export default Client;
