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
    <div className="Servicios">
      <Carousel
        cards={datos.map((dato) => ({
          key: uuidv4(),
          content: <Card imagen={`https://drive.google.com/uc?id=${dato.imagen_ser}`} 
          titulo={dato.nombre_ser} 
          descripcion={dato.descripcion_ser} 

          trabajos={<div>
            {dato.trabajos.map((trabajo) => (
              <div key={trabajo.id}>
                <p>{trabajo.nombre_tra}</p>
              </div>
            ))}
          </div>}

          celular={<div>
            <div key={dato.celular.id}>
              <p>{dato.celular.numero_cel}</p>
            </div>
          </div>}
          />,
        }))}
        width="75%"
        margin="0px auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default Servicios;
