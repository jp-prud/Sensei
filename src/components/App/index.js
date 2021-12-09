import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import SideBar from '../SideBar';

import { Wrapper, MainContainer, Content } from './style';

import Routes from '../../Routes';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Wrapper>
          <SideBar />

          <MainContainer>
            <Header />

            <Content>
              <Routes />
            </Content>
          </MainContainer>
        </Wrapper>

      </ThemeProvider>
    </BrowserRouter>
  );
}
