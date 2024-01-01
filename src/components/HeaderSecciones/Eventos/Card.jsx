import React from 'react';
import './Card.css'

const Card = ({ titulo, fecha, enlaceI, enlaceC,imagen, descripcion, participantes, modalidad, tipo, plataforma, ubicacion }) => {

  return (
    <div className="card">
      <img src={imagen} className="card-img-top" alt={titulo} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{fecha}</p>
        <p className="card-text">{enlaceI}</p>
        <p className="card-text">{enlaceC}</p>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">{participantes}</p>
        <p className="card-text">{modalidad}</p>
        <p className="card-text">{tipo}</p>
        <p className="card-text">{plataforma}</p>
        <p className="card-text">{ubicacion}</p>
      </div>
    </div>
  );
};

export default Card;
