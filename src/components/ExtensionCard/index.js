import React from 'react';

import {
  Container, Header, Badge, Description, Footer,
} from './style';

import ExtensionContent from './mocks';

export default function ExtensionCard() {
  return (
    <>
      {
        ExtensionContent.map(({
          image, title, description, status,
        }) => (
          <Container key={title}>
            <Header>
              <div>
                <img src={image} alt="Icon Extension Card" />
              </div>

              <Badge active>
                <span>
                  {status}
                </span>
              </Badge>
            </Header>

            <Description>
              <h1>
                { title }
              </h1>
              <small>
                { description }
              </small>
            </Description>
            <Footer>
              <hr />

              <button type="button">
                Excluir
              </button>
            </Footer>
          </Container>
        ))
      }
    </>
  );
}
