import React from 'react';
import TableHeader from "../../ui/TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
import {TTrainCharacteristics} from "../../types/train-types";

type TrainCharacteristicsProps = {
    tableData: TTrainCharacteristics[];
    headers: string[];
}

const TrainCharacteristics: React.FC<TrainCharacteristicsProps> = ({tableData, headers}): React.JSX.Element => {
    return (
        <table>
            <TableHeader headers={headers}/>
            <tbody>
            {tableData.map(data => <TableRow rowData={data} type={'characteristics'}/>)}
            </tbody>
        </table>
    );
};

export default TrainCharacteristics;

