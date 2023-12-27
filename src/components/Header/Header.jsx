import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react';
import logoImage from '../../assets/logoCraam.png'; 

import { Link, useLocation } from 'react-router-dom';
import Routes from '../../routes/Routes'

export default class MenuExampleSecondary extends Component {

  render() {
    return (
      <div>
      <Menu secondary>
        <Menu.Item>
          <Image src={logoImage} size='mini' spaced='right' />
        </Menu.Item>

        <Menu.Item>
            <Link to="/inicio" >
              Inicio
            </Link>
        </Menu.Item>

        <Menu.Item>
            <Link to="/eventos" >
              Eventos
            </Link>
        </Menu.Item>

        <Menu.Item>
            <Link to="/competencias" >
              Competencias
            </Link>
        </Menu.Item>

        <Menu.Item>
            <Link to="/integrantes" >
              Integrantes
            </Link>
        </Menu.Item>

        <Menu.Item>
            <Link to="/colaboradores" >
              Colaboradores
            </Link>
        </Menu.Item>

        <Menu.Item>
            <Link to="/servicios" >
              Servicios
            </Link>
        </Menu.Item>
      </Menu>
      <Routes />
      </div>
    )
  }
}