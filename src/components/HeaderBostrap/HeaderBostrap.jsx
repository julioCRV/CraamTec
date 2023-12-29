import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Routes from '../../routes/Routes';

function App() {
  return (
    <divc>
      <Navbar expand="lg" bg="dark" variant="light" sticky="top" >
        <Container>
          <Navbar.Brand href="/">Tu Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Item>
                <NavLink className="nav-link" activeClassName="active" to="/inicio">
                  Inicio
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" activeClassName="active" to="/eventos">
                  Eventos
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" activeClassName="active" to="/competencias">
                  Participaciones
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" activeClassName="active" to="/integrantes">
                  Integrantes
                </NavLink>
              </Nav.Item>
            
              <Nav.Item>
                <NavLink className="nav-link" activeClassName="active" to="/servicios">
                  Servicios
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Routes />
      </Container>
      
    </divc>
  );
}

export default App;
