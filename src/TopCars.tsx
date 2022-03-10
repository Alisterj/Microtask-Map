import React from 'react';
import {CarsType} from "./App";
import TableCars from "./TableCars";

type CarTablePropsType = {
    cars: Array<CarsType>
}

const TopCars = (props: CarTablePropsType) => {
    const topCarsTable = props.cars.map((car, index) => <TableCars id={index+1} {...car}/>)
    return (
        <table>
            {topCarsTable}
        </table>
    );
};

export default TopCars;