/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import Task from '../Task/Task';
import { FormValues, TodosProps } from '../../types/types';
import './Todos.scss';

const NewTodos = ({ todos } : TodosProps) => {
  return (
    <div className='todos-block new'>
      <h1 className="title">My todo</h1>
      <ul className="todos">
        {todos && todos.map((todo, index) => {
          return (
            <li key={index} className="todos-item">
              <Task submitCount={index + 1} titleTask={todo.titleTask} desc={todo.desc} importance={todo.importance} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewTodos;
