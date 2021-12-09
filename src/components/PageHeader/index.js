import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from './style';

import PlusIcon from '../../assets/images/icons/Plus.svg';

export default function PageHeader(props) {
  return (
    <Container>
      <h1>
        {props.title}
      </h1>

      {props.button && (
        <Button>
          <Link to="extension/addExtension">
            <img src={PlusIcon} alt="Adicionar" />
            <span> Adicionar </span>
          </Link>
        </Button>
      )}
    </Container>
  );
}
