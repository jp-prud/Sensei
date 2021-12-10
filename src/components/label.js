import styled from 'styled-components';

export default styled.label`
  font: ${({ theme }) => theme.font.body};
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 8px;
`;
