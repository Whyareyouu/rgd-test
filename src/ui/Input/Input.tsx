import React from 'react';
import {InputProps} from "./Input.props";
import './Input.styles.css'

const Input = ({onChange, value, error}:InputProps) => {
    return (
        <input onChange={onChange} value={value} className={`input ${error ? 'error' : ''}`}/>
    );
};

export default Input;
