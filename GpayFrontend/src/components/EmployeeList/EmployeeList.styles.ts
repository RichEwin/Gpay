import styled from 'styled-components';
import { GlobalButton } from '../../styles/global';

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const StyledTable = styled.table`
`;

export const THead = styled.thead`
`;

export const TBody = styled.tbody`
`;

export const TR = styled.tr`
`;

export const TH = styled.th`
  padding: 1.5rem;
  text-align: center;
`;

export const TD = styled.td`
  padding: 1rem;
  border-bottom: 3px solid #eaeaea;
  text-align: center;
`;

export const ButtonDeleteEmployee = styled(GlobalButton)`
  background-color: transparent;
  color: red;
  width: 5px;
  padding: 0;
  font-size: 10;
      &:hover {
    background: transparent;
    transition: 0.5s;
  }
`;

export const EmptyContent = styled.div`
  padding: 116px 0 195px;
  text-align: center;
  line-height: 35px;
  font-size: 40px;
`;
