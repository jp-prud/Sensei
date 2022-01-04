import React from 'react';

import { Container } from './styled';

export default function FormGroup({ children, error }) {
  return (
    <Container>
      {children}

      {error && (
        <small>
          {error}
        </small>
      )}
    </Container>
  );
}
