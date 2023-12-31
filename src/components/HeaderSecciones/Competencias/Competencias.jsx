import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Participaciones.css";

function Competencias() {

  const [datos, setDatos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://craamtec-web.onrender.com/shares/api/shares/participacionTotales/');
      setDatos(response.data);
    } catch (error) {
      console.error('Error al obtener los datos: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Participaciones">
      {datos.length > 0 ? (
        <p>{datos[0].nombre_par}</p>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}


export default Competencias;
