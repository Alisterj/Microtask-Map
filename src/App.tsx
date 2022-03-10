import React from 'react';
import './App.css';
import NewComponents from "./NewComponents";
import {v1} from "uuid";

export type StudentType = {
    id: string
    name: string
    age: number
}

function App() {
    const students = [
        {id: v1(), name: 'Alister', age: 23},
        {id: v1(), name: 'Donny', age: 35},
        {id: v1(), name: 'Lilo', age: 27},
        {id: v1(), name: 'Din', age: 22},
        {id: v1(), name: 'Al', age: 27},
        {id: v1(), name: 'Rita', age: 31},
        {id: v1(), name: 'Sofa', age: 36},
    ]
  return (
    <div className="App">
      <NewComponents students={students}/>
    </div>
  );
}

export default App;
