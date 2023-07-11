import React from 'react';

type TableProps = {
    value: string;
}

const TableCell: React.FC<TableProps> = ({value}) => {
    return (
        <td>
            {value}
        </td>
    );
};

export default TableCell;
