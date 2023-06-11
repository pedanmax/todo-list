/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Todos from './components/Todos/Todos';
import { TaskFields, FormValues } from './types/types';
import './App.css';

function App() {
  const [todos, setTodos] = useState<FormValues[]>([]);
  const [changedTodo, setChagedTodo] = useState<FormValues>({
    titleTask: '', description: '', importance: '', id: 0, isChecked: false,
  });

  const addTodoToState = (value: FormValues) => setTodos((prev) => [...prev, value]);

  const folowingTodo = (value: FormValues) => {
    setChagedTodo(value);
  };

  useEffect(() => {
    if (todos.length) {
      const updatedTodos = todos;
      updatedTodos[updatedTodos.findIndex((el) => el.id === changedTodo.id)] = changedTodo;
      setTodos(updatedTodos);
    }
  }, [changedTodo]);

  return (
    <StyledEngineProvider injectFirst>
      <Container>
        <Header />
        <main>
          <Form addTodoToState={addTodoToState} />
          <Todos todos={todos} folowingTodo={folowingTodo} />
        </main>
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
