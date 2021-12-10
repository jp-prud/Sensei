import styled from 'styled-components';

export const Form = styled.div`
  width: 90%;
  max-width: 418px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const FormHeader = styled.div`
  text-align: center;

  h1 {
    font: ${({ theme }) => theme.font.title_h1};
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    font: 500 14px 'Inter';
    color: ${({ theme }) => theme.colors.gray};
    margin: 20px 0;
  }
`;

export const FormBody = styled.form`
  width: 100%;
  padding: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;