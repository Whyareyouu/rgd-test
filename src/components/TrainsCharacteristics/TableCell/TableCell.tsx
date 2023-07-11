import React, {useState} from 'react';
import {ValidationSchema} from "../../../helpers/validationSchema";
import {useAppDispatch} from "../../../hooks/redux-hooks";
import {changeCharacteristic} from "../../../redux/features/characteristicsSlice/characteristicsSlice";

type TableProps = {
    value: number;
    name: string;
    index: number;
}

const TableCell: React.FC<TableProps> = ({value, name, index}) => {
    const [state, setState] = useState<string>(value.toString());
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    const handleChangeInput = (value: string) => {
        setState(value);
        const errors = ValidationSchema(value, name);
        if (errors) {
            setError(errors);
        } else {
            setError('');
            dispatch(changeCharacteristic({index: 0, name, newValue: Number(value)}))
        }
    }
    return (
        <td>
            <input value={state} onChange={(e) => handleChangeInput(e.target.value)}/>
            {error && <span style={{color: 'red'}}>{error}</span>}
        </td>
    );
};

export default TableCell;
