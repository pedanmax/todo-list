/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import Task from '../Task/Task';
import { FormValues, TodosProps } from '../../types/types';
import './Todos.scss';

const NewTodos = ({ todos } : TodosProps) => {
  const newTodos = todos.filter((todo) => !todo.isChecked);

  const urgentlyTodos = newTodos.filter((todo) => todo.importance === 'urgently do');
  const lessUrgentlyTodos = newTodos.filter((todo) => todo.importance === 'less urgently do');
  const notUrgentlyTodos = newTodos.filter((todo) => todo.importance === 'not urgent');

  const subtitle = <h4 className='subtitle'>Add new task!</h4>;
  return (
    <div className='todos-block new'>
      <h1 className="title">My tasks</h1>
      {!newTodos.length && subtitle}
      {urgentlyTodos.length !== 0 && (
      <ul className="todos-urgently">
        {urgentlyTodos.map((todo, index) => {
          return (
            <li key={todo.id} className="todos-item">
              <Task
                formValues={{
                  numberTask: index + 1,
                  titleTask: todo.titleTask,
                  description: todo.description,
                  importance: todo.importance,
                  isChecked: todo.isChecked,
                  id: todo.id,
                }}
                disabled={newTodos.length === 0}
              />
            </li>
          );
        })}
      </ul>
      )}
      {lessUrgentlyTodos.length !== 0 && (
      <ul className="todos-less-urgently">
        {lessUrgentlyTodos.map((todo, index) => {
          return (
            <li key={todo.id} className="todos-item">
              <Task
                formValues={{
                  numberTask: index + 1,
                  titleTask: todo.titleTask,
                  description: todo.description,
                  importance: todo.importance,
                  isChecked: todo.isChecked,
                  id: todo.id,
                }}
                disabled={newTodos.length === 0}
              />
            </li>
          );
        })}
      </ul>
      )}
      {notUrgentlyTodos.length !== 0 && (
      <ul className="todos-not-urgently">
        {notUrgentlyTodos?.map((todo, index) => {
          return (
            <li key={todo.id} className="todos-item">
              <Task
                formValues={{
                  numberTask: index + 1,
                  titleTask: todo.titleTask,
                  description: todo.description,
                  importance: todo.importance,
                  isChecked: todo.isChecked,
                  id: todo.id,
                }}
                disabled={newTodos.length === 0}
              />
            </li>
          );
        })}
      </ul>
      )}
    </div>
  );
};

export default NewTodos;
