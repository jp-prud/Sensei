import styled from 'styled-components';

export const Container = styled.div`
  width: 33%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  background: #FFF;
  border-radius: 20px;

  @media (max-width: 980px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: top;
  justify-content: space-between;

  div:first-child {
    height: 58px;
    width: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    img {
      width: 100%;
    }
  }
`;

export const Badge = styled.div`
  height: 22px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(88, 135, 255, 0.1);
  color: ${({ theme }) => theme.colors.info};
  border-radius: 11px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h1 {
    font: 700 1rem/20px 'Inter';
    margin-bottom: 10px;
  }

  small {
    font: 500 14px/20px 'Inter';
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;

  hr {
    width: 100%;
    color: ${({ theme }) => theme.colors.border};
    opacity: .2;
    margin: 5px 0 20px;
  }

  button {
    height: 33px;
    width: 89px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.danger};
    text-align: center;
    font: 400 16px/24px 'Inter';
  }
`;
