import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    margin-top: 89px;
    font: ${({ theme }) => theme.font.title_h1};
  }

  small {
    margin-top: 20px;
    font: medium 14px/auto;
    color: ${({ theme }) => theme.colors.gray};
  }

  a {
    font: 300 16px/24px 'Inter';
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px 45px;
    text-decoration: none;
    margin-top: 30px;
    border-radius: 4px;
  }
`;
