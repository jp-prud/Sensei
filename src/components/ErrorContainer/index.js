import React from 'react';

import { Container } from './styles';

import Sad from '../../assets/images/icons/Sad.svg';

export default function ErrorContainer(props) {
  return (
    <Container>
      <img src={Sad} alt="sad-icon" />

      <div className="details">
        <h1>
          {props.message}
        </h1>

        {props.children}
      </div>
    </Container>
  );
}
