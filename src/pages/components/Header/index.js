import React from 'react';

import {
  Container,
  SearchInputContainer,
} from './style';

import UserContainerConfiguration from './UserContainerConfiguration';

export default function Header() {
  return (
    <Container>
      <SearchInputContainer>
        <input type="text" />
      </SearchInputContainer>

      <UserContainerConfiguration />
    </Container>
  );
}
