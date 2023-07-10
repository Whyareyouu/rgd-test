import React from 'react';

type TableProps = {
    value: string | number;
}

const TableCell: React.FC<TableProps> = ({value}) => {
    return (
        <td>
            {value}
        </td>
    );
};

export default TableCell;
