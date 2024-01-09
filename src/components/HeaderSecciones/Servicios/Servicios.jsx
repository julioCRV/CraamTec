import "./Servicios.css";
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import axios from 'axios';

function Servicios() {
  const [datos, setDatos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://craamtec-web.onrender.com/services/api/services/serviciosTotales/');
      setDatos(response.data);
    } catch (error) {
      console.error('Error al obtener los datos: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Servicios">
      {datos.length > 0 ? (
        <Carousel
          cards={datos.map((dato) => ({
            key: datos.id,
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
              celular={`https://wa.me/591${dato.celular.numero_cel}`}
            />,
          }))}
          width="75%"
          margin="0px auto"
          offset={2}
          showArrows={false}
        />
      ) : (
        <p>Cargando datos...</p>
      )}



    </div>
  );
}

export default Servicios;