import React from 'react';
import class from './BuildControl.css'

const buildControl = (props) =>
(
    <div>{props.level}</div>
    <button>Less</button>
    <button>More</button>
    
);

export default buildControl;

