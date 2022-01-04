import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button';

import {
  Overlay, Container, Header, Footer,
} from './style';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <Header>
          <h1>
            Tem certeza que deseja remover o contato ”Mateus Silva”?
          </h1>

          <span>
            Esta ação não poderá ser desfeita!
          </span>
        </Header>

        <Footer>
          <button
            type="button"
            className="btn-cancel"
          >
            Cancelar
          </button>
          <Button danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
