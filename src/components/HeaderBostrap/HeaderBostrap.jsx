import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Routes from '../../routes/Routes'

function App() {
  return (
    <div>
    <Navbar expand="lg" bg="body-tertiary">
      <div className="container-fluid">
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="navbar-nav">
            <Nav.Item>
              <NavLink className="nav-link" activeClassName="active" to="/inicio">Inicio</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" activeClassName="active" to="/eventos">Eventos</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" activeClassName="active" to="/competencias">Competencias</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" activeClassName="active" to="/integrantes">Integrantes</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" activeClassName="active" to="/colaboradores">Colaboradores</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" activeClassName="active" to="/servicios">Servicios</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    <Routes />
    </div>
  );
}

export default App;
