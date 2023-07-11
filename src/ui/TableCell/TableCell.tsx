import React, {useState} from 'react';

type TableProps = {
    value: number;
    type: 'trains' | 'characteristics'
}

const TableCell: React.FC<TableProps> = ({value, type = "trains"}) => {
    const [state, setState] = useState<number>(value);
    return (
        <td>
            {type === 'trains' ? <>{value}</> :
                <input value={state} onChange={(e) => setState(parseInt(e.target.value))}/>}
        </td>
    );
};

export default TableCell;
