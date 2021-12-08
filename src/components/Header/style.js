import styled from 'styled-components';

import SearchIcon from '../../assets/images/icons/icon-search.svg';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 23px 20px 20px;
  background: ${({ theme }) => theme.colors.white};

  input {
    height: 40px;
    width: 271px;

    padding: 3px 8px 3px 42px;
    border: none;
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.inputBackground};
    color: ${({ theme }) => theme.colors.placeholder};

    ::placeholder {
      font: 500 14px/34px 'Inter';
      color: ${({ theme }) => theme.colors.placeholder};
    }

    :before {
      content: "";
      background-image: url(${SearchIcon});
      width: 32px;
      height: 32px;
      display: block;
    }
  }
`;

export const SearchInputContainer = styled.div`

`;
