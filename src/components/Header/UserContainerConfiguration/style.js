import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Children = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: none;
  background: ${({ theme }) => theme.colors.inputBackground};
  cursor: pointer;

`;
