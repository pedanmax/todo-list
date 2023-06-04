import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ButtonComponent = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      endIcon={<AddCircleIcon />}
      sx={{ flex: '1 1 25%', height: '56px' }}
    >
      Add todo
    </Button>
  );
};

export default ButtonComponent;
