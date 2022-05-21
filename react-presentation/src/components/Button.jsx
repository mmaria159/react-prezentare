import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <button class={props.style} onClick={props.onClickHandler}>
            {props.children}
        </button>
    );
}

export default Button;