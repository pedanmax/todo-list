/* eslint-disable max-len */
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
  const initialStateTodos = localStorage.getItem('todos');
  const [todos, setTodos] = useState<FormValues[]>(initialStateTodos ? JSON.parse(initialStateTodos) : []);
  const [changedTodo, setChagedTodo] = useState<FormValues>({
    titleTask: '', description: '', importance: '', id: 0, isChecked: false,
  });
  const [removeTodoId, setRemoveTodoId] = useState<number>(0);
  const addTodoToState = (value: FormValues) => {
    setTodos((prev) => [...prev, value]);
  };

  const folowingTodo = (value: FormValues) => {
    setChagedTodo(value);
  };

  const removeTodo = (value: number) => {
    setRemoveTodoId(value);
  };

  useEffect(() => {
    if (todos.length) {
      const updatedTodos = todos;
      updatedTodos[updatedTodos.findIndex((el) => el.id === changedTodo.id)] = changedTodo;
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [changedTodo]);

  // useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [todos]);

  useEffect(() => {
    const newTodos = todos;
    const filteredTodos = newTodos.filter((todo) => todo.id !== removeTodoId);
    setTodos(filteredTodos);
  }, [removeTodoId]);

  // console.log(removeTodoId);
  console.log(todos);
  return (
    <StyledEngineProvider injectFirst>
      <Container>
        <Header />
        <main>
          <Form addTodoToState={addTodoToState} />
          <Todos todos={todos} folowingTodo={folowingTodo} removeTodo={removeTodo} />
        </main>
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
