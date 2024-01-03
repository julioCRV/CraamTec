import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/logo-CraamTEc.png';



import Routes from '../../routes/Routes';

function App() {

  return (
    <div className="header-container">
      <Navbar expand="lg" bg="dark" variant="light" sticky="top" >
        <Container>
          {/* <Navbar.Brand >
            <img
              src={logoImage}
              className="d-inline-block align-top"
              alt="Tu Logo"
              loading="lazy"
            />

          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Item>
                <NavLink className="nav-link" to="/inicio">
                  Inicio
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" to="/eventos">
                  Eventos
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" to="/participaciones">
                  Participaciones
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" to="/integrantes">
                  Integrantes
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink className="nav-link" to="/servicios">
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

    </div>
  );
}

export default App;
