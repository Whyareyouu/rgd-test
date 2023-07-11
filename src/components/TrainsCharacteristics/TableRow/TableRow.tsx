import React from 'react';
import {TTrainCharacteristics} from "../../../types/train-types";
import TableCell from "../TableCell/TableCell";

type TableRowProps = {
    rowData: TTrainCharacteristics;
}

const TableRow: React.FC<TableRowProps> = ({rowData}) => {
    return (
        <tr>
            {Object.entries(rowData).map((row, index) => <TableCell key={row[1]} index={index} value={row[1]}
                                                                    name={row[0]}/>)}
        </tr>
    );
};

export default TableRow;
