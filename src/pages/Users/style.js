import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ hasError }) => hasError && css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `}
`;

export const List = styled.div`
  width: 100%;

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

    button {
      display: flex;
      align-items: center;
      border: none;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.main};
        background-color: #FFF;
      }

      img {
        display: block;
        margin-left: 8px;
        transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(90deg)' : 'rotate(-90deg)')};
        transition: transform 0.2s ease-in;
      }
    }

    select {
      max-width: 185px;

      & + select {
        margin-left: 16px;
      }
    }
  }

  @media (max-width: 780px) {
    flex-wrap: wrap;

    input {
      width: 100%;
      max-width: 100%;
    }

    div {
      width: 100%;
      margin-top: 16px;
    }
  }
`;
