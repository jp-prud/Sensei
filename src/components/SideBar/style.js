import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  min-width: 253px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.backgroundDark};
`;

export const SideBarHeader = styled.div`
  padding-bottom: 24px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};

    img {
      margin-right: 8px;
    }

    h1 {
      font: bold 20px 'Inter';
      letter-spacing: 0.86px;
    }

    small {
      font: 500 12px 'Inter';
    }
  }
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
