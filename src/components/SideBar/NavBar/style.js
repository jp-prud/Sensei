import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    height: 51px;
    display: flex;
    align-items: center;
    text-decoration: none;
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.white};
    transition: all .3s ease-out;

    :hover {
      opacity: 1;
    }

    img {
      margin-right: 10px;
    }
  }

  .section-title {
    display: block;
    height: 30px;
    text-transform: uppercase;
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.white};
    font: ${({ theme }) => theme.font.body};
  }
`;
