import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 20px;
    margin:0 ;
`;

const PaginationStyle = styled(Pagination)`
&& {
    display: flex;
        flex-direction: column;
        align-items: center;
  }
`;
export { List, PaginationStyle };
