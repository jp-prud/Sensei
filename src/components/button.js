import styled, { css } from 'styled-components';

export default styled.button`
  height: 44px;
  padding: 0 16px;
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

    ${({ theme, danger }) => danger && css`
      background: ${theme.colors.danger};

      &:hover {
        background: ${theme.colors.danger};
      }
    `}

    ${({ theme, outline }) => outline && css`
      background: transparent;

      color: ${theme.colors.primary.main};
      border: 1px solid ${theme.colors.primary.main};

      &:hover {
        color: ${theme.colors.primary.main};
      }
    `}
`;
