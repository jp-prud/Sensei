import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container, SideBarHeader, Navbar, User,
} from './style';

import Avatar from '../../assets/images/icons/avatar-sidebar.svg';

export default function SideBar() {
  return (
    <Container>
      <SideBarHeader />

      <Navbar>
        <Link to="/"> Dashboard</Link>
        <Link to="/post"> Post </Link>
        <Link to="/categories"> Categories </Link>
        <Link to="/media"> Media </Link>
        <Link to="/pages"> Pages </Link>
        <Link to="/comments"> Comments </Link>

        <span> System </span>

        <Link to="/apparance"> Apparance </Link>
        <Link to="/extensions"> Extensions </Link>
        <Link to="/users"> Users </Link>
        <Link to="/settings"> Settings </Link>
      </Navbar>

      <User>
        <img src={Avatar} alt="Avatar Icon" />

        <div>
          <span> Joao Pedro</span>
          <span> Developer </span>
        </div>
      </User>
    </Container>
  );
}
