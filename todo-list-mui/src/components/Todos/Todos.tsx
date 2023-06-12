import { useContext } from 'react';
import { Stack } from '@mui/material';
import NewTodos from './NewTodos';
import DoneTodos from './DoneTodos';
import { FormValues } from '../../types/types';
import './Todos.scss';
import Context from '../../Context';

const Todos = () => {
  const { todos } = useContext(Context);
  const newTodos = todos.filter((todo) => !todo.isChecked);
  const doneTodos = todos.filter((todo) => todo.isChecked);

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <NewTodos
        todos={newTodos}
      />
      {doneTodos.length !== 0
        && (
        <DoneTodos
          todos={doneTodos}
        />
        )}
    </Stack>
  );
};

export default Todos;
