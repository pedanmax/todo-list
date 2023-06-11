import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import NewTodos from './NewTodos';
import DoneTodos from './DoneTodos';
import './Todos.scss';
import { FormValues, TodosProps } from '../../types/types';

const Todos = (props : TodosProps) => {
  const { todos, folowingTodo, removeTodo } = props;
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <NewTodos todos={todos} folowingTodo={folowingTodo} removeTodo={removeTodo} />
      <DoneTodos />
    </Stack>
  );
};

export default Todos;
