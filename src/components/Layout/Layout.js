import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import './Layout.css';


const layout =(props)=>
(
    <Aux>
        <div >Toolbar, Sidedrawer, Backdrawer</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;