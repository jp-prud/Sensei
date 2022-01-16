import React from 'react';
import { Link } from 'react-router-dom';

import EmptyBox from '../../assets/images/icons/EmptyBox.svg';
import Button from '../Button';

import { Container } from './styles';

export default function EmptyContainer({ context, redirectTo }) {
  return (
    <Container>
      <Button>
        <Link to={redirectTo}>
          Adicionar
        </Link>
      </Button>

      <div className="details">
        <img src={EmptyBox} alt="Empty-Box" width="110px" />

        <span>
          Você ainda não tem nenhum
          {` ${context} `}
          cadastrado!

          Clique no botão
          <strong>
            {' "Adicionar" '}
          </strong>
          à cima para cadastrar o seu primeiro!
        </span>
      </div>
    </Container>
  );
}
