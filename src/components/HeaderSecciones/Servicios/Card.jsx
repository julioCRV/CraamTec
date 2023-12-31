import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";

function Card({ imagen , titulo, descripcion, trabajos, celular}) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <div  className={Styles.container}>
    <animated.div
       className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" /> 
      <h2>{titulo}</h2>
      <p><div>{descripcion}</div>
       
      </p>

      <h3>Trabajos:</h3>
      <p>{trabajos}</p>

      <h3>Celular:</h3>
      <p>{celular}</p>
      <div className={Styles.btnn}>
        <Button text="CONTACTANOS" />
      </div>
    </animated.div>
  </div>
  );
}

export default Card;
