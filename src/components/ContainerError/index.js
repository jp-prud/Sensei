import React from 'react';

import { Container } from './styles';

export default function ContainerError(props) {
  return (
    <Container>
      <div className="details">
        <h1>
          {props.message}
        </h1>

        {props.children}
      </div>
    </Container>
  );
}
