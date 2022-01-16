import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;

  img {
    margin-right: 16px;
  }

  span {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
