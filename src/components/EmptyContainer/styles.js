import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  .details {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 16px;
    padding-top: 16px;

    span {
      width: 50%;
      display: block;
      margin-top: 16px;
      text-align: center;
      color: ${({ theme }) => theme.colors.gray};

      strong {
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;
