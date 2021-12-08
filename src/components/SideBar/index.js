import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container, SideBarHeader, Navbar, User,
} from './style';

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
        <span> Joao Pedro</span>
      </User>
    </Container>
  );
}
