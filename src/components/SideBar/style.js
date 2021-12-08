import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 253px;
  background: ${({ theme }) => theme.colors.backgroundDark};
`;

export const SideBarHeader = styled.div`
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;

  a {
    height: 51px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    padding-left: 24px;
    opacity: 0.5;
  }
`;

export const User = styled.div`
`;
