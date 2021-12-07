import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/themes/default';

import Header from '../pages/components/Header';
import SideMenu from '../pages/components/SideMenu';

import { Wrapper, MainContainer } from './style';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Wrapper>
        <SideMenu />

        <MainContainer>
          <Header />
          <h1>bem vindo</h1>
        </MainContainer>
      </Wrapper>

    </ThemeProvider>
  );
}
