import styled from 'styled-components';

export const StatisticSection = styled.section`
  margin: 50px auto;
  background-color: #ffffff;
  width: 600px;
`;

export const StatTitle = styled.h2`
  padding: 20px 200px;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
`;

export const StatListItem = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
