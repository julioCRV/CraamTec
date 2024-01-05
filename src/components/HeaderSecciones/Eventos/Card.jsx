import React, { useState } from 'react';
import './Card.css'
import discord from '../../../assets/discord.png';
import meet from '../../../assets/meet.png';
import youtube from '../../../assets/youtube.png';
import Zoom from '../../../assets/zoom.png';

import fechaimg from '../../../assets/fecha.png';
import maps from '../../../assets/ubicacion.png';
import whatsapp from '../../../assets/whatsapp.png';
import registro from '../../../assets/registro2.png';

const Card = ({ titulo, fecha, enlaceI, enlaceC, imagen, descripcion, participantes, modalidad, tipo, plataforma, ubicacion }) => {

  // plataforma = ['YouTube', 'Meet', 'Zoom', 'Discord'];
  const [getFecha, setFecha] = useState(new Date().toISOString().split('T')[0]);

  const addImagen = ({ nombrePlataforma }) => {
    if (nombrePlataforma == 'YouTube') {
      return <img src={youtube} alt="Logo de la plataforma" className='plataforma-imagen' />
    } else if (nombrePlataforma == 'Meet') {
      return <img src={meet} alt="Logo de la plataforma" className='plataforma-imagen' />
    } else if (nombrePlataforma == 'Zoom') {
      return <img src={Zoom} alt="Logo de la plataforma" className='plataforma-imagen' />
    } else if (nombrePlataforma == 'Discord') {
      return <img src={discord} alt="Logo de la plataforma" className='plataforma-imagen' />
    } else {
      return "";
    }
  }

  return (
    <div className="card">
      <div className="deslizante">
        <img src={imagen} className="card-imagen" alt={titulo} />
        <div className="card-body">
          <div className="card-titulo">{titulo}</div>
          <div className="card-descripcion">{descripcion}</div>

          <div className="card-fecha text-center">
            <div className='card-subtitulo '>Fecha</div>
            <div className='d-flex align-items-center justify-content-center'>
              <img src={fechaimg} alt="Logo de enlace" title="" className='plataforma-img-fecha' />
              <span className="ml-2">{fecha}</span>
            </div>
          </div>

          {(getFecha <= fecha) && (
            <div className="card-enlace d-flex flex-column align-items-center">
              <div className='card-subtitulo mb-2'>Enlaces</div>

              <div className="d-flex justify-content-between">
                {/* Enlace 1 */}
                <a href={enlaceI} target="_blank" rel="noopener noreferrer" className="mr-2">
                  <img src={registro} alt="Logo de enlace" title="Registro en línea" className='plataforma-enlace' />
                </a>

                {/* Enlace 2 */}
                <a href={enlaceC} target="_blank" rel="noopener noreferrer" className="ml-2">
                  <img src={whatsapp} alt="Logo de enlace" title="Grupo de Whatsapp" className='plataforma-enlace' />
                </a>
              </div>
            </div>

          )}
          <div className="card-text"><div className='card-subtitulo'>Tipo de Evento</div> <div className='card-texto-centrar'>{tipo}</div></div>
          <div className="card-text"><div className='card-subtitulo'>Modalidad</div> <div className='card-texto-centrar'>{modalidad}</div></div>

          {modalidad === 'Presencial' ? (
            <div className="card-enlace text-center">
              <div className='card-subtitulo mb-2'>Ubicación</div>
              <a href={ubicacion} target="_blank" rel="noopener noreferrer">
                <img src={maps} alt="Logo de enlace" title="" className='card-ubicacion' />
              </a>
            </div>

          ) : (
            <div className="card-text">
              <div className='card-subtitulo'>Plataformas</div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {plataforma &&
                  plataforma.map((nombrePlataforma, index) => (
                    <div key={index} style={{ width: '50%' }}>
                      {addImagen({ nombrePlataforma })}
                    </div>
                  ))}
              </div>

            </div>
          )}
          {(getFecha > fecha) &&
            <div className="card-text">
              <div className='card-subtitulo'>Participantes</div>
              <div className='card-texto-centrar'>{participantes}</div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
