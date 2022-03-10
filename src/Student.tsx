import React from 'react';
import {StudentType} from "./App";

const Student = (props: StudentType) => {
    return (
        <li>
            <span>{props.name}</span>
            <span> age: {props.age}</span>
        </li>
    );
};

export default Student;