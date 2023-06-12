/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Todos from './components/Todos/Todos';
import Context from './Context';
import { FormValues } from './types/types';
import './App.css';

function App() {
  const initialStateTodos = localStorage.getItem('todos');
  const [todos, setTodos] = useState<FormValues[]>(initialStateTodos ? JSON.parse(initialStateTodos) : []);

  const addTodoToState = (value: FormValues) => {
    setTodos((prev) => [...prev, value]);
  };

  const removeTodoFunc = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodos = (id: number, stateTask: FormValues) => {
    const updatedTodos = [...todos];
    updatedTodos[updatedTodos.findIndex((el) => el.id === id)] = stateTask;
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const contextValue = useMemo(() => ({
    removeTodoFunc, updateTodos, addTodoToState, todos,
  }), [removeTodoFunc, updateTodos, addTodoToState, todos]);

  return (
    <StyledEngineProvider injectFirst>
      <Context.Provider
        value={contextValue}
      >
        <Container>
          <Header />
          <main>
            <Form />
            <Todos />
          </main>
        </Container>
      </Context.Provider>
    </StyledEngineProvider>
  );
}

export default App;
