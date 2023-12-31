import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Inicio.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
/*apñiquecambios aqui */ 
function Inicio() {
  return (
    <section className="banner" id="home">
      
      <Container>
      <Row className="align-items-center">
          <Col md={12}>
               <div className="home">
                 <div className="content">
                     <h5>Bienvenidos</h5>
                       <h1>Somos <span class="changecontent"></span></h1>
                       <p>Dejanos guiarte por la mejor experiencia , todo al alcance de un click</p>
                       <Button className="custom-button" >
                       <span>Contactanos</span>
                       <i></i>
                       </Button>
                 </div>
               </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>

    </section>
    
  );
}

export default Inicio;
