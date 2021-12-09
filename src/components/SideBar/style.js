import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  min-width: 253px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.backgroundDark};
`;

export const SideBarHeader = styled.div`
`;

export const User = styled.div`
  margin-top: auto;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-out;

  :hover {
    background: rgba(255, 255, 255, 0.15);
  }

  img {
    margin-right: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.white};

    span {
      font: 600 14px 'Inter';
      letter-spacing: .75px;
    }

    span:last-child {
      opacity: .5;
      font: 500 10px 'Inter';
      letter-spacing: .85px;
      text-transform: lowercase;
    }
  }
`;
