import { Skeleton, TableCell, TableRow } from '@mui/material';

interface TableSkeletonProps {
  rowsNum?: number;
  colsNum: number;
}

const TableSkeleton = ({ rowsNum = 6, colsNum }: TableSkeletonProps) => {
  return [...Array(rowsNum)].map((_row, index) => (
    <TableRow key={index}>
      {[...Array(colsNum)].map((_row, i) => (
        <TableCell component="th" scope="row" key={i}>
          <Skeleton animation="wave" variant="text" />
        </TableCell>
      ))}
    </TableRow>
  ));
};

export default TableSkeleton;
