import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from './style';

import PlusIcon from '../../assets/images/icons/Plus.svg';

export default function PageHeader({ title, button, redirectTo }) {
  return (
    <Container className="page-header-title">
      <h1>
        {title}
      </h1>

      {button && (
        <Button>
          <Link to={redirectTo}>
            <img src={PlusIcon} alt="Adicionar" />
            <span> Adicionar </span>
          </Link>
        </Button>
      )}
    </Container>
  );
}
