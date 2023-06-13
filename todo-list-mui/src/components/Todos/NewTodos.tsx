/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Task from '../Task/Task';
import { TodosProps } from '../../types/types';
import Context from '../../Context';
import blueIcon from '../../assets/star-blue.svg';
import blueMiddle from '../../assets/star-blue-middle.svg';
import blueLow from '../../assets/star-blue-low.svg';
import './Todos.scss';

const NewTodos = ({ todos } : TodosProps) => {
  const newTodos = todos.filter((todo) => !todo.isChecked);

  const urgentlyTodos = newTodos.filter((todo) => todo.importance === 'urgently do');
  const lessUrgentlyTodos = newTodos.filter((todo) => todo.importance === 'less urgently do');
  const notUrgentlyTodos = newTodos.filter((todo) => todo.importance === 'not urgent');

  const { titleRef } = useContext(Context);

  return (
    <div className='todos-block new'>
      <h1 className="title">My tasks</h1>
      {!newTodos.length && (
        <Button
          type='button'
          variant="outlined"
          endIcon={<AddCircleIcon />}
          onClick={() => titleRef.current?.focus()}
          sx={{ marginBottom: '40px' }}
        >
          Add todo
        </Button>
      )}
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
                  icon={blueIcon}
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
                  icon={blueMiddle}
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
                  icon={blueLow}
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
