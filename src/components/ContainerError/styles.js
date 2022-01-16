import styled from 'styled-components';

export const Container = styled.div`

  .details {
    h1 {
      color: ${({ theme }) => theme.colors.danger};
    }

    button {
      margin-top: 8px;
      display: block;
    }
  }
`;
