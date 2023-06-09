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
  const addTodoToState = (value: FormValues) => setTodos((prev) => [...prev, value]);
  console.log(todos);
  return (
    <StyledEngineProvider injectFirst>
      <Container>
        <Header />
        <main>
          <Form addTodoToState={addTodoToState} />
          <Todos todos={todos} />
        </main>
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
