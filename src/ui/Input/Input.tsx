import React from 'react';
import {InputProps} from "./Input.props";
import './Input.styles.css'

const Input = ({onChange, value, error}: InputProps) => {
    return (
        <div className={'input_container'}>
            <input onChange={onChange} value={value} className={`input ${error ? 'error' : ''}`}/>
            {error && <span style={{color: 'red'}}>{error}</span>}
        </div>
    );
};

export default Input;
