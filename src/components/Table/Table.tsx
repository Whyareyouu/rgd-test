import React from 'react';
import TableHeader from "./TableHeader/TableHeader";
import {TableProps} from "./Table.props";

const Table = ({tableData, columns, headers}: TableProps): React.JSX.Element => {
    return (
        <table>
            <TableHeader headers={['название', 'описание']}/>
            <tbody>
            {tableData.map((train) => (
                <tr key={train.name}>
                    <td>{train.name}</td>
                    <td>{train.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
