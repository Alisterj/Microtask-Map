import React from 'react';
import {CarsType, StudentType} from "./App";
import Student from "./Student";
import TopCars from "./TopCars";

type NewComponentsPropsType = {
    students: Array<StudentType>
    cars: Array<CarsType>
}

const NewComponents = (props: NewComponentsPropsType) => {
    const studentsNameAndOld = props.students.map(student => <Student key={student.id} {...student}/>);
    return (
        <div>
            new components
            <ul>
                {studentsNameAndOld}
            </ul>
            <TopCars cars={props.cars}/>
        </div>
    );
};

export default NewComponents;