import Task from '../Task/Task';
import { TodosProps } from '../../types/types';
import starDone from '../../assets/star-done.svg';
import './Todos.scss';

const DoneTodos = ({ todos } : TodosProps) => {
  const doneTodos = todos.filter((todo) => todo.isChecked);
  return (
    <div className='todos-block done'>
      <h1 className="title">Done tasks</h1>
      <ul className="todos">
        {doneTodos && doneTodos.map((todo, index) => {
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
                disabled={doneTodos.length !== 0}
                icon={starDone}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DoneTodos;
