import styled from 'styled-components';

import SearchIcon from '../../assets/images/icons/Search.svg';

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

    background:
      url(${SearchIcon})
      ${({ theme }) => theme.colors.inputBackground}
      no-repeat 8px
     ;
    color: ${({ theme }) => theme.colors.placeholder};

    ::placeholder {
      font: 500 14px/34px 'Inter';
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`;

export const SearchInputContainer = styled.div`

`;
