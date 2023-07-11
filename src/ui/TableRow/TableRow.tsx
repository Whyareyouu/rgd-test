import React from 'react';
import TableCell from "../TableCell/TableCell";
import {TTrain} from "../../types/train-types";

type TableRowProps = {
    columns: { key: string; label: string }[];
    rowData: any; // Исправить
    type: 'trains' | 'characteristics';
    setTrainC: (data: TTrain) => void;
}

const TableRow: React.FC<TableRowProps> = ({rowData, columns, type, setTrainC}) => {
    return (
        <tr onClick={() => setTrainC(rowData)}>
            {columns.map(column => <TableCell type={type} value={rowData[column.key]}/>)}
        </tr>
    );
};

export default TableRow;
