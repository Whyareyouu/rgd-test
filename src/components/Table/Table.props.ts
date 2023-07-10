import React from 'react';
import {TTrain} from "../../types/train-types";

export interface TableProps extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    headers: string[];
    tableData: TTrain[];
    columns: { key: string; label: string }[];
}