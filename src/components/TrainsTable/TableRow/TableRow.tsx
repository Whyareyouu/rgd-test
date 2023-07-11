import React from 'react';
import TableCell from "../../../ui/TableCell/TableCell";
import {TTrain} from "../../../types/train-types";

type TableRowProps = {
    columns: { key: string; label: string }[];
    rowData: any; // Исправить
    setTrainC: (data: TTrain) => void;
}

const TableRow: React.FC<TableRowProps> = ({rowData, columns, setTrainC}) => {
    return (
        <tr onClick={() => setTrainC(rowData)}>
            {columns.map(column => <TableCell value={rowData[column.key]}/>)}
        </tr>
    );
};

export default TableRow;
