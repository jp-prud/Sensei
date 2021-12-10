import styled from 'styled-components';

export default styled.select`
  height: 44px;
  width: 100%;
  border: 2px solid #FFF;
  border-radius: 8px;
  padding: 0 16px;
  transition: border-color .3s ease-in;
  font-size: 1rem;

  :focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }
`;
