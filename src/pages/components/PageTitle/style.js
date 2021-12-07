import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font: bold 24px/34px 'Inter';
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.title};
  }
`;
