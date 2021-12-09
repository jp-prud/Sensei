import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container, SideBarHeader, User,
} from './style';

import Navbar from './NavBar';

import Avatar from '../../assets/images/icons/sidebar/Avatar-sidebar.svg';

export default function SideBar() {
  return (
    <Container>
      <SideBarHeader />

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
