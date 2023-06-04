import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Button variant="outlined">Hello World</Button>
    </StyledEngineProvider>
  );
}

export default App;
