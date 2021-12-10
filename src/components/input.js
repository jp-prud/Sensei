import styled from 'styled-components';

export default styled.input`
  height: 44px;
  width: 100%;
  border: 1px solid #FFF;
  border-radius: 8px;
  padding: 0 16px;
  transition: border-color .1s;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.inputBackground};

  :focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
