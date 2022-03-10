import React from 'react';
import {StudentType} from "./App";
import Student from "./Student";

type NewComponentsPropsType = {
    students: Array<StudentType>
}

const NewComponents = (props: NewComponentsPropsType) => {
    const studentsNameAndOld = props.students.map(student => <Student key={student.id} {...student}/>);
    return (
        <div>
            new components
            <ul>
                {studentsNameAndOld}
            </ul>
        </div>
    );
};

export default NewComponents;