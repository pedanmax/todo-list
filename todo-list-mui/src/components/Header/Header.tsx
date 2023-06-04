import { Typography, Container } from '@mui/material';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <Typography
        variant="h1"
        component="h1"
        fontSize={38}
        fontWeight={700}
        color="yellow"
        sx={{
          textAlign: 'center',
        }}
      >
        Todo list
      </Typography>
      <FormatListNumberedIcon sx={{ color: 'yellow', width: '40px', height: '40px' }} />
    </header>
  );
}

export default Header;
