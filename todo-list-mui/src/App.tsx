import { StyledEngineProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import './App.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Container maxWidth="lg">
        <Header />
        <main>
          <Form />
        </main>
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
