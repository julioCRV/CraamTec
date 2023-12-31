import "./Servicios.css";
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function Servicios() {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServicios() {
      try {
        const response = await fetch('https://craamtec-web.onrender.com/services/api/services/serviciosTotales/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setDatos(result);
        setLoading(false); // Marcar la carga como completa
      } catch (error) {
        console.error('Error al obtener datos:', error);
        setLoading(false); // Marcar la carga como completa incluso en caso de error
      }
    };

    fetchServicios();
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default Servicios;

