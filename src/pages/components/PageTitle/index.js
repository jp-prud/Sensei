import React from 'react';

import { Container } from './style';

export default function PageTitle(props) {
  return (
    <Container>
      <h1>
        {props.title}
      </h1>
    </Container>
  );
}
