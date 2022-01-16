import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    h1 {
      color: ${({ theme }) => theme.colors.danger};
    }

    button {
      margin-top: 8px;
      display: block;
    }
  }
`;
