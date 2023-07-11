import React, {useEffect, useState} from 'react';
import {ValidationSchema} from "../../../helpers/validationSchema";

type TableProps = {
    value: number;
    name: string;
}

const TableCell: React.FC<TableProps> = ({value, name}) => {
    const [state, setState] = useState<string>(value.toString());
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const errors = ValidationSchema(state, name);
        if (errors) {
            setError(errors);
        } else {
            setError('');
        }
    }, [state]);

    return (
        <td>
            <input value={state} onChange={(e) => setState(e.target.value)}/>
            {error && <span style={{color: 'red'}}>{error}</span>}
        </td>
    );
};

export default TableCell;
