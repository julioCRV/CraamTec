import React, { useState, useEffect } from 'react';
import axios from "axios";
import './integrantes.css'
import Logo from '../../../assets/logoCraam.png'

function Integrantes() {
  const [datos, setDatos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://craamtec-web.onrender.com/members/api/members/miembro/'
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
        <div className="row row-cols-1 row-cols-md-4">
          {datos.map((integrante) => (
            <div key={integrante.id} className="col mb-4">
              <div className="card">
                {/* Your card content here */}
                <div className="card-body">
                    <img
                      src={Logo}
                      // src={`https://drive.google.com/uc?id=${integrante.foto_int}`}
                      alt="Imagen Circular"     className="imagen-estilo"             
                    />
                  <h5 className="card-title">{integrante.nombres_int}</h5>
                  <h5 className="card-title">{integrante.apellidos_int}</h5>
                  {/* Additional card content */}
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

export default Integrantes;
