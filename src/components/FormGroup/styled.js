import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 8px;
  }

  small {
    color: ${({ theme }) => theme.colors.danger};
    display: block;
    margin-top: 8px;
    font-size: 12px;
  }
`;
