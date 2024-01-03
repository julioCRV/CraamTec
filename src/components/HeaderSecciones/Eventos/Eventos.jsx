import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

function Eventos() {
  const [datos, setDatos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://craamtec-web.onrender.com/events/api/events/totalEventos/');
      setDatos(response.data);
    } catch (error) {
      console.error('Error al obtener los datos: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(datos)

  return (
    <div className="container mt-5">
      <div className="row">
        {datos.map((dato) => (
          <div className="col-md-4" key={dato.id}>
            <Card titulo={dato.nombre_eve}
              fecha={dato.fecha_eve}
              enlaceI={dato.enlace_inscripcion_eve}
              enlaceC={dato.enlace_chat_eve}
              imagen={`https://drive.google.com/uc?id=${dato.foto_eve}`}
              descripcion={dato.descripcion_eve}
              participantes={dato.total_participantes_eve}
              modalidad={dato.modalidad_eve}
              tipo={dato.tipo_evento_eve}

              plataforma={<div>
                {dato.plataformas.map((plataforma) => (
                  <div key={plataforma.id}>
                    {plataforma.nombre_pla}
                  </div>
                ))}
              </div>}

              ubicacion={<div>
                {dato.ubicaciones.map((ubi) => (
                  <div key={ubi.id}>
                    {ubi.nombre_ubi}

                    {ubi.direccion_ubi}
                  </div>
                ))}
              </div>}
            />
          </div>
        ))}
      </div>
    </div>

  );
}

export default Eventos;
