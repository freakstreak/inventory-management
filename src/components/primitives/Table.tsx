import {
  TableCell as MuiTableCell,
  TableRow as MuiTableRow,
  TableHead as MuiTableHead,
  TableBody as MuiTableBody,
  TableContainer as MuiTableContainer,
  Table as MuiTable,
  TableCellProps,
  TableRowProps,
  TableHeadProps,
  TableBodyProps,
  TableContainerProps,
  TableProps,
} from "@mui/material";

interface ITableCellProps extends TableCellProps {
  isHeading?: boolean;
}

export const TableContainer = ({ children, ...props }: TableContainerProps) => {
  return (
    <MuiTableContainer
      {...props}
      className="border border-gray-secondary rounded-md"
    >
      {children}
    </MuiTableContainer>
  );
};

export const Table = ({ children, ...props }: TableProps) => {
  return <MuiTable {...props}>{children}</MuiTable>;
};

export const TableCell = ({ children, ...props }: ITableCellProps) => {
  return props?.isHeading ? (
    <MuiTableCell
      className="!text-green-secondary !border-b-gray-secondary"
      {...props}
    >
      <span className="p-3 bg-black rounded-md">{children}</span>
    </MuiTableCell>
  ) : (
    <MuiTableCell
      className={
        "!text-gray-primary !border-b-gray-secondary " + props.className
      }
      {...props}
    >
      {children}
    </MuiTableCell>
  );
};

export const TableRow = ({ children, ...props }: TableRowProps) => {
  return <MuiTableRow {...props}>{children}</MuiTableRow>;
};

export const TableHead = ({ children, ...props }: TableHeadProps) => {
  return <MuiTableHead {...props}>{children}</MuiTableHead>;
};

export const TableBody = ({ children, ...props }: TableBodyProps) => {
  return <MuiTableBody {...props}>{children}</MuiTableBody>;
};
