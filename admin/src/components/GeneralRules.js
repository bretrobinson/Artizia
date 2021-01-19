import React, {useState} from 'react';
import {TextareaAutosize} from '@material-ui/core'

const Rules = () => {
    return (
        <div>
            <h3>General Rules</h3>
            
            <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" />
        </div>
    );
};



export default Rules;