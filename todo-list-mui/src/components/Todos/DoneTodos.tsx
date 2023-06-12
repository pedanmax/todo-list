import Task from '../Task/Task';
import { TodosProps } from '../../types/types';
import './Todos.scss';

const DoneTodos = ({ todos, folowingTodo, removeTodo } : TodosProps) => {
  // const doneTodos = todos.filter((todo) => todo.isChecked);
  return (
    <div className='todos-block done'>
      <h1 className="title">Done todo</h1>
      <ul className="todos">
        {todos && todos.map((todo, index) => {
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
                changeTodoFunc={folowingTodo}
                removeTodo={removeTodo}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DoneTodos;
