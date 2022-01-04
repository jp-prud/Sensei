import styled from 'styled-components';

export const List = styled.div`
  table {
    width: 100%;
    text-align: center;
  }
`;

export const ListFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
  padding: 32px 20px;
  box-shadow: 0px 1px 0px #DADBE4;

  input {
    max-width: 266px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    select {
      max-width: 185px;

      & + select {
        margin-left: 16px;
      }
    }
  }
`;
