import React from 'react';
import { Link } from 'react-router-dom';

import NotFoundImage from '../../assets/images/not-found.svg';

import { Container } from './style';

export default function NotFound() {
  return (
    <Container>
      <img src={NotFoundImage} alt="Not Found Error" width="644" height="350" />

      <h1> Page not found. </h1>
      <small> The page you are looking for might have been removed. </small>

      <Link to="/">Return to home</Link>
    </Container>
  );
}
