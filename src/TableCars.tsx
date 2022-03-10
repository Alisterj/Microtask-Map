import React from 'react';
import {CarsType} from "./App";
import './TopCars.css'

type TableCarsPropsType = CarsType & {
    id: number
}

const TableCars = (props: TableCarsPropsType) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.manufacturer}</td>
            <td>{props.model}</td>
        </tr>
    );
};

export default TableCars;