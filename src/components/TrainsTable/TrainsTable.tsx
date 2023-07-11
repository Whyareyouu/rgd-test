import React, {useState} from 'react';
import TableHeader from "../../ui/TableHeader/TableHeader";
import {TableProps} from "./Table.props";
import TableRow from "./TableRow/TableRow";
import {TTrain} from "../../types/train-types";
import {TrainsCharacteristics} from "../index";

const TrainsTable = ({tableData, columns, headers}: TableProps): React.JSX.Element => {
    const [trainC, setTrainC] = useState<null | TTrain>(null);
    return (
        <>
            <table>
                <TableHeader headers={headers}/>
                <tbody>
                {tableData.map((data, id) => <TableRow setTrainC={setTrainC} rowData={data}
                                                       columns={columns} key={id}/>)}
                </tbody>
            </table>
            {trainC && <TrainsCharacteristics tableData={trainC.characteristics}
                                              headers={['Скорость', 'Силя тяги', 'Ток двигателя']}/>}
        </>
    );
};

export default TrainsTable;
