import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/themes/default';

import Header from '../pages/components/Header';
import SideMenu from '../pages/components/SideMenu';
import PageTitle from '../pages/components/PageTitle';

import { Wrapper, MainContainer, Content } from './style';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Wrapper>
        <SideMenu />

        <MainContainer>
          <Header />

          <Content>
            <PageTitle title="Dashboard" />
          </Content>
        </MainContainer>
      </Wrapper>

    </ThemeProvider>
  );
}
