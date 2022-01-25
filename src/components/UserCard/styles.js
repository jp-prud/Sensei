import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  header {
    display: flex;
    align-items: center;

    h3 {
      margin-right: 16px;
      font-size: 1.6rem;
    }

    span {
      background: rgba(0, 133, 233, .3);
      color: ${({ theme }) => theme.colors.primary.main};
      display: inline;
      margin: 0 auto;
      padding: 6px 8px;
      border-radius: 4px;
    }
  }

  .infos {
    color: ${({ theme }) => theme.colors.gray};

    span {
      display: block;
      margin-top: 4px;
    }
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;

  a + a {
    margin-left: 16px;
  }
`;
