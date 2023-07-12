import React, {useEffect} from 'react';
import TableRow from "./TableRow/TableRow";
import {TTrainCharacteristics} from "../../types/train-types";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {addTrainData} from "../../redux/features/characteristicsSlice/characteristicsSlice";
import {Button, TableHeader} from "../../ui";
import './Table.styles.css'

type TrainCharacteristicsProps = {
    tableData: TTrainCharacteristics[];
    headers: string[];
}

const TrainCharacteristics: React.FC<TrainCharacteristicsProps> = ({tableData, headers}): React.JSX.Element => {
    const dispatch = useAppDispatch();
    const characteristics = useAppSelector(state => state.characteristics);
    useEffect(() => {
        dispatch(addTrainData(tableData));
    }, [tableData]);

    const isErrors = () => {
        const errors = Object.values(characteristics.errors).filter(error => error !== null);
        return errors.length > 0;
    }

    const handleClick = () => {
        const speed = characteristics.characteristics.map(characteristic => characteristic.speed).sort((a, b) => a - b);
        console.log(speed)
    };

    return (
        <div>
            <table className={'characteristics_table'}>
                <TableHeader headers={headers}/>
                <tbody>
                {tableData.map((data, index) => <TableRow key={index.toString(16)} index={index} rowData={data}/>)}
                </tbody>
            </table>
            <Button onClick={handleClick} disabled={isErrors()}>Отправить данные</Button>
        </div>
    );
};

export default TrainCharacteristics;

