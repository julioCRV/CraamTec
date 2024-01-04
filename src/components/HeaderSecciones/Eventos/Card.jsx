import React, { useState } from 'react';
import './Card.css'
import discord from '../../../assets/discort.png';
import meet from '../../../assets/meet.png';
import youtube from '../../../assets/youtube.png';
import Zoom from '../../../assets/zoom.png';
import skype from '../../../assets/skype.png';


const Card = ({ titulo, fecha, enlaceI, enlaceC, imagen, descripcion, participantes, modalidad, tipo, plataforma, ubicacion }) => {

  const [mostrarInformacion, setMostrarInformacion] = useState(false);
  const [getFecha,setFecha] = useState(new Date().toISOString().split('T')[0]);

  const toggleInformacion = () => {
    setMostrarInformacion(!mostrarInformacion);
  };

  const addImagen = ({ nombrePlataforma }) => {
    if (nombrePlataforma == 'YouTube') {
      return <img src={youtube} alt="Logo de la plataforma" />
    } else if (nombrePlataforma == 'Meet') {
      return <img src={meet} alt="Logo de la plataforma" />
    } else if (nombrePlataforma == 'Zoom') {
      return <img src={Zoom} alt="Logo de la plataforma" />
    } else if (nombrePlataforma == 'Discord') {
      return <img src={discord} alt="Logo de la plataforma" />
    } else {
      return <img src={skype} alt='Logo de la plataforma' />
    }
  }
  return (
    <div className="card">
      <img src={imagen} className="card-imagen" alt={titulo} />
      <div className="card-body">
        <h6 className="card-title">{titulo}</h6>
        <div className="card-descripcion">{descripcion}</div>
        <div className="card-fecha">
          Fecha: <br/>
          <div className='card-texto-centrar'>
            <i className="bi bi-calendar-check" style={{ fontSize: '14px', marginRight: '4px', color: '#007bff' }}></i> {fecha}
          </div>
        </div>
        {(getFecha <= fecha) &&(
          <div className="card-enlace">
            Enlaces:
            <br />
            <i className="bi bi-link-45deg" style={{ fontSize: '14px', marginRight: '4px', color: 'red ' }}></i>
            <a href={enlaceI} target="_blank" rel="noopener noreferrer">{enlaceI}</a>
            <br />
            <i className="bi bi-whatsapp" style={{ fontSize: '14px', marginRight: '4px', color: '#25d366' }}></i>
            <a href={enlaceC} target="_blank" rel="noopener noreferrer"> {enlaceC}</a>
          </div>
        )}
        <div className="card-text">Tipo de Evento: <div className='card-texto-centrar'>{tipo}</div></div>
        <div className="card-text">Modalidad: <div className='card-texto-centrar'>{modalidad}</div></div>
        {modalidad === 'Presencial' ? (
          <div className="card-text">Ubicación: <a href={ubicacion} target="_blank" rel="noopener noreferrer"> {enlaceC}</a> </div>
        ) : (
          <div className="card-text">
              Plataformas:
              <div className='card-texto-centrar'>
                <div style={{ position: 'relative' }}>
                  {plataforma &&
                    plataforma.map((nombrePlataforma, index) => (
                      <div key={index}>
                        <div>
                          <div className="card-image">
                            {addImagen({ nombrePlataforma })}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
        )}
        {(getFecha > fecha) &&
          <div className="card-text">Participantes: <div className='card-texto-centrar'>{participantes}</div></div>
        }
        <button onClick={toggleInformacion}>
          {mostrarInformacion ? <i class="bi bi-chevron-compact-up"></i> : <i class="bi bi-chevron-compact-down"></i>}
        </button>

      </div>
    </div>
  );
};

export default Card;
