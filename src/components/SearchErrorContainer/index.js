import React from 'react';

import { Container } from './styles';

import SearchError from '../../assets/images/icons/SearchError.svg';

export default function SearchErrorContainer({ context }) {
  return (
    <Container>
      <img src={SearchError} alt="search-icon-error" />

      <span>
        Nenhum resultado foi encontrado para:
        <strong>
          {` "${context}"`}
        </strong>
        .
      </span>
    </Container>
  );
}
