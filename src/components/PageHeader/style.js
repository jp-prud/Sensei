import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  h1 {
    font: ${({ theme }) => theme.font.title_h3};
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.title};
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
  font: 500 1rem/24px 'Inter';
  border-radius: 4px;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    margin-right: 4px;
  }
`;
