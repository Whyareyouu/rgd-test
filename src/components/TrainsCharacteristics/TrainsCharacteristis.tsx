import React from 'react';
import TableHeader from "../../ui/TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
import {TTrainCharacteristics} from "../../types/train-types";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {addTrainData} from "../../redux/features/characteristicsSlice/characteristicsSlice";

type TrainCharacteristicsProps = {
    tableData: TTrainCharacteristics[];
    headers: string[];
}

const TrainCharacteristics: React.FC<TrainCharacteristicsProps> = ({tableData, headers}): React.JSX.Element => {
    const dispatch = useAppDispatch();
    dispatch(addTrainData(tableData));
    return (
        <table>
            <TableHeader headers={headers}/>
            <tbody>
            {tableData.map((data, index) => <TableRow key={index.toString(16)} index={index} rowData={data}/>)}
            </tbody>
        </table>
    );
};

export default TrainCharacteristics;

