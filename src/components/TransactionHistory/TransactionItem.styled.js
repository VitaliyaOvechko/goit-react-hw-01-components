import styled from 'styled-components';

export const TransTable = styled.table`
  width: 60%;
  margin: 100px auto;
`;

export const Thead = styled.thead`
  background-color: #1eaaaf;
  color: #ffffff;
`;

export const TitleText = styled.th`
  padding: 15px 0;
`;

export const TableBody = styled.tbody`
  background-color: #ffffff;
  color: #5c5c5c;
`;

export const Tr = styled.tr`
  text-align: center;
  padding: 5px 0;
  :nth-child(even) {
    background-color: #f1f1f1;
  }
`;

export const Td = styled.td`
  padding: 10px 0;
`;
