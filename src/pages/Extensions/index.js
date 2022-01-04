import React from 'react';
import ExtensionCard from '../../components/ExtensionCard';

import PageHeader from '../../components/PageHeader';

import { Container } from './style';

export default function Extensions() {
  return (
    <>
      <PageHeader title="Extensões" button />

      <Container>
        <ExtensionCard />
      </Container>
    </>
  );
}
