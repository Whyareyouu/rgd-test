import React from 'react';
import TableCell from "../../../ui/TableCell/TableCell";
import {TTrain} from "../../../types/train-types";

type ColumnType = Omit<TTrain, 'characteristics'>

type TableRowProps = {
    columns: { key: string; label: string }[];
    rowData: TTrain;
    setTrainC: (data: TTrain) => void;
}

const TableRow: React.FC<TableRowProps> = ({rowData, columns, setTrainC}) => {
    return (
        <tr onClick={() => setTrainC(rowData)}>
            {columns.map(column => <TableCell key={rowData[column.key as keyof ColumnType]} value={rowData[column.key as keyof ColumnType]}/>)}
        </tr>
    );
};

export default TableRow;
