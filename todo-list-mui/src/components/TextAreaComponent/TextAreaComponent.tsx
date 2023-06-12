/* eslint-disable max-len */
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

const TextAreaComponent = ({
  changeState, value, visibility, disabled,
} : { changeState: (event: React.ChangeEvent<HTMLTextAreaElement>) => void, value:string, visibility: boolean, disabled: boolean }) => {
  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 4px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: #56b8e0;
    border: 1.35px solid #376392 ;
    ;
    box-sizing: border-box;
    // transition: all 0.3s ease;
    display: ${visibility ? 'block' : 'none'};
    &:hover {
      border:1.35px solid #000;
    }
  
    &:focus {
      border:none;
      outline:2px solid #0085ff;
      box-sizing: border-box;
    }

  `,
  );

  return (
    <StyledTextarea
      maxRows={4}
      aria-label="maximum height"
      placeholder="Your description"
      defaultValue={value}
      onBlur={changeState}
      disabled={disabled}
      sx={{
        width: '100%',
        height: '100px',
        padding: '10px',
        resize: 'none',
      }}
    />
  );
};

export default TextAreaComponent;
