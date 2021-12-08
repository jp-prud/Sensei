import styled from 'styled-components';

export const Wrapper = styled.body`
  width: 100%;
  height: 100%;
  display: flex;

  @media(max-width: 980px) {
    flex-direction: column;
  }
`;

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  padding: 20px;
`;
