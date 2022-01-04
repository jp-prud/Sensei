import styled from 'styled-components';

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(7px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 200px;
  width: 100%;
  max-width: 480px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  padding: 16px;

  h1 {
    font: bold 20px/28px 'Inter';
      color: ${({ theme, danger }) => (
    danger ? theme.colors.danger : theme.colors.title
  )}
  }
`;

export const Header = styled.header`

  h1 {
    font: bold 20px/28px 'Inter';
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .btn-cancel {
    border: none;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.label};
  }
`;
