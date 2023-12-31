import React, { useState, useEffect } from 'react';
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
        <p>{datos[0].nombre_ser}</p>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default Servicios;

