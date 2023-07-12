import React, {useEffect, useState} from 'react';
import {ValidationSchema} from "../../../helpers/validationSchema";
import {useAppDispatch} from "../../../hooks/redux-hooks";
import {
    changeCharacteristic,
    characteristicsError
} from "../../../redux/features/characteristicsSlice/characteristicsSlice";
import {Input} from "../../../ui";

type TableProps = {
    value: number;
    name: string;
    index: number;
}

const TableCell: React.FC<TableProps> = ({value, name, index}) => {
    const [state, setState] = useState<string>(value.toString());
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const errors = ValidationSchema(state, name);
        setError(errors);
        dispatch(characteristicsError({name: `${name}-${index}`, error: errors}));
    }, [error]);


    const handleChangeInput = (value: string) => {
        setState(value);
        const errors = ValidationSchema(value, name);
        if (errors) {
            setError(errors);
        } else {
            setError(null);
            dispatch(changeCharacteristic({index: index, name, newValue: Number(value)}));
        }
    }
    return (
        <td>
            <Input value={state} onChange={(e) => handleChangeInput(e.target.value)} error={error}/>
        </td>
    );
};

export default TableCell;
