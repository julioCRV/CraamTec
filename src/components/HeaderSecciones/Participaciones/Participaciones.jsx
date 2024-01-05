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
                <div className="col-md-4">
                  <img
                    src={`https://drive.google.com/uc?id=${evento.foto_par}`}
                    alt={evento.nombre_par}
                    className="img-fluid rounded-start imagen-pequena"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-body-con-margen">
                    <h5 className="card-titulo">{evento.nombre_par}</h5>
                    <p className="card-text">
                      <span className='card-subtitulo'>Tipo de actividad:</span> {evento.tipo_participacion}
                    </p>
                    <hr style={{ color: 'white' }} />
                    <div className="deslizante-participaciones">
                      <p className="card-text">{evento.descripcion_par}</p>
                    </div>
                    <p className="card-text">
                      <div className="card-fecha2">{evento.fecha_par}</div>
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
