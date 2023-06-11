/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import Task from '../Task/Task';
import { TodosProps } from '../../types/types';
import './Todos.scss';

const NewTodos = ({ todos, folowingTodo } : TodosProps) => {
  return (
    <div className='todos-block new'>
      <h1 className="title">My todo</h1>
      <ul className="todos">
        {todos && todos.map((todo, index) => {
          return (
            <li key={index} className="todos-item">
              <Task
                formValues={{
                  numberTask: index + 1,
                  titleTask: todo.titleTask,
                  description: todo.description,
                  importance: todo.importance,
                  isChecked: false,
                  id: todo.id,
                }}
                changeTodoFunc={folowingTodo}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewTodos;
