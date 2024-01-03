import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Participaciones.css";

function Competencias() {
  const [datos, setDatos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://craamtec-web.onrender.com/shares/api/shares/participacionTotales/'
      );
      setDatos(response.data);
    } catch (error) {
      console.error('Error al obtener los datos: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      {datos.length > 0 ? (
        <div>
          {datos.map((evento) => (
            <div key={evento.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                  <img
                    src={`https://drive.google.com/uc?id=${evento.foto_par}`}
                    alt={evento.nombre_par}
                    className="img-fluid rounded-start"
                  />
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{evento.nombre_par}</h5>
                    <p className="card-text">
                      <strong>Tipo de Evento:</strong>{' '}
                      {evento.tipo_participacion}
                    </p>
                    <hr />
                    <p className="card-text">{evento.descripcion_par}</p>
                    <p className="card-text">
                      <small className="text-muted">{evento.fecha_par}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default Competencias;
