import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './inicio.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function Inicio() {
  return (
    <section className="banner" id="home">
      
      <Container>
        <Row className="align-items-center">
          <Col md={12}>
            <div className="vision-box">
              <h2>Visión</h2>
              <p><i>CRAAMTEC, nuestra misión conjunta es construir un ecosistema educativo y tecnológico que inspire
              la excelencia y la innovación. Nos esforzamos cultivar mentes brillantes en la Academia Luminal,
              brindando una educación integral que no solo nutre el conocimiento, sino también la creatividad y la
              responsabilidad ética.
              </i>        
              </p>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center">
        <Col md={12}>
            <div className="mision-box">
              <h2>Misión</h2>
              <p>
                <i>
                Nuestra vision e CRAAMTEC, es crear un uro on e a ucaci n y a tecno ogase entre acen
                para impulsar la innovación y el progreso. Imaginamos un mundo donde cada mente cultivada en
                CRAAMTEC se convierta en un agente de cambio, aplicando conocimientos éticos y habilidades
                tecnológicas de programación para resolver desafíos globales.
                </i>
              </p>
            </div>
          </Col>
         </Row>
      </Container>

    </section>
    
  );
}

export default Inicio;
