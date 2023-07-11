import React from 'react';
import TableCell from "../../../ui/TableCell/TableCell";
import {TTrainCharacteristics} from "../../../types/train-types";

type TableRowProps = {
    rowData: TTrainCharacteristics;
    type: 'trains' | 'characteristics';
}

const TableRow: React.FC<TableRowProps> = ({rowData, type}) => {
    return (
        <tr>
            {Object.values(rowData).map(row => <TableCell value={row} type={type} />)}
        </tr>
    );
};

export default TableRow;
