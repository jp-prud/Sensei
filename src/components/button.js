import styled from 'styled-components';

export default styled.button`
  height: 44px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  color: #FFF;
  transition: all .3s ease-in;
  font-size: 1rem;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.light};
    }

    &:active {
      background: ${({ theme }) => theme.colors.primary.dark};
    }

    &[disabled] {
      background: #ccc;
      cursor: default;
    }
`;
