import Styles from "./Card.module.css";
import React from "react";
import Button from 'react-bootstrap/Button';

function Card({ imagen, titulo, descripcion, trabajos, celular }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardContent}>
        <img src={imagen} alt="" />
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <h3>Trabajos:</h3>
        <div className={Styles.textdescripcion}>{trabajos}</div>
        <div className={Styles.btnn}>
          <a href={celular} target="_blank" rel="noopener noreferrer">
            <Button className="custom-button">
              <span>Contactanos</span>
              <i></i>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
