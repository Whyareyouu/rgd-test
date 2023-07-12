import React from 'react';

type TableCellProps = {
    value: string;
    className?: string
}

const TableCell = ({value, className}: TableCellProps):React.JSX.Element => {
    return (
        <td className={className}>
            {value}
        </td>
    );
};

export default React.memo(TableCell);
