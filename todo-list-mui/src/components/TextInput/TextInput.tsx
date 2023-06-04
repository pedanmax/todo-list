import { TextField } from '@mui/material';
import { TextInputProps } from '../../types/types';

const TextInput = ({
  type, label, name, refProp,
}: TextInputProps) => {
  return (
    <TextField
      autoComplete='off'
      name={name}
      type={type}
      required
      variant="outlined"
      label={label}
      size='medium'
      sx={{ flex: '1 1 20%' }}
      inputRef={refProp}
    />
  );
};

export default TextInput;
