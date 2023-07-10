import React from 'react';

type TableHeaderProps = {
    headers: string[];
}
const TableHeader: React.FC<TableHeaderProps> = ({headers}): React.JSX.Element => {
    return (
        <thead>
        <tr>
            {headers.map(header => (
                <th>{header}</th>
            ))}
        </tr>
        </thead>
    );
};

export default TableHeader;
