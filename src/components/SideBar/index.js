import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container, SideBarHeader, User,
} from './style';

import Navbar from './NavBar';

import Logo from '../../assets/images/Modular.svg';
import Avatar from '../../assets/images/icons/sidebar/Avatar-sidebar.svg';

export default function SideBar() {
  return (
    <Container>
      <SideBarHeader>
        <Link to="/">
          <img src={Logo} alt="Modular - Estratégias Digitais" width="50px" />

          <div>
            <h1>
              Modular
            </h1>
            <small>
              Dashboard
            </small>
          </div>
        </Link>
      </SideBarHeader>

      <Navbar />

      <Link to="/user">
        <User>
          <img src={Avatar} alt="Avatar Icon" />

          <div>
            <span> Joao Pedro</span>
            <span> Developer </span>
          </div>
        </User>
      </Link>
    </Container>
  );
}
