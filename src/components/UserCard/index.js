import React from 'react';
import { Link } from 'react-router-dom';

import { Container, UserDetails, Action } from './styles';

import Dump from '../../assets/images/icons/Dump.svg';
import Edit from '../../assets/images/icons/Edit.svg';

export default function UserCard({ user }) {
  return (
    <Container>
      <UserDetails>
        <header>
          <h3>
            {user.name}
          </h3>

          <span>
            {user.store_name}
          </span>
        </header>

        <div className="infos">
          <span>
            {user.email}
          </span>

          <span>
            {user.phone}
          </span>
        </div>
      </UserDetails>

      <Action>
        <Link to={`clients/edit-user/${user.id}`}>
          <img src={Edit} alt="Editar" />
        </Link>

        <Link to={`clients/${user.id}`}>
          <img src={Dump} alt="Excluir" />
        </Link>
      </Action>
    </Container>
  );
}
