import React from 'react';
import {ButtonProps} from "./Button.props";
import './Button.styles.css'

const Button = ({className, disabled, children, onClick}:ButtonProps) => {
    return (
        <button className={`button ${className}`} disabled={disabled} onClick={onClick}>{children}</button>
    );
};

export default React.memo(Button);
