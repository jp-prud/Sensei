import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  height: 48px;
  font: 500 14px 'Inter';
  color: ${({ theme }) => theme.colors.gray};
  `;

export const TableBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Row = styled.tr`
  width: 100%;

  td {
    height: 64px;
    font: 500 12px 'Inter';
    letter-spacing: -0.3px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
