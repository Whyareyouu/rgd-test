import React from 'react';
import TableCell from "../TableCell/TableCell";

type TableRowProps = {
    rowData: { [key: string]: string | number };
    columns: { key: string; label: string }[];
}

const TableRow: React.FC<TableRowProps> = ({rowData, columns}) => {
    return (
        <tr>
            {columns.map(column => <TableCell value={rowData[column.key]}/>)}
        </tr>
    );
};

export default TableRow;
