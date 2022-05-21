import React from 'react';
import './Actions.css'

const Actions = (props) => {
    return (
        <div className={props.style}>
            {props.children}
        </div>
    );
}

export default Actions;