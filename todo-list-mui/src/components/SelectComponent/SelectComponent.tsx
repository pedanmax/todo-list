/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Select, MenuItem, InputLabel, FormControl, FormHelperText,
} from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../types/types';

const SelectComponent = ({ refProp, error }: { refProp: UseFormRegister<FormValues>, error:boolean }) => {
  return (
    <FormControl sx={{ flex: '1 1 25%' }}>
      <InputLabel id="demo-simple-select-label">Importance</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Importance"
        defaultValue=''
        required
        {...refProp('importance', { required: 'Choise is required' })}
        error={error}
      >
        <MenuItem value="urgently do">Urgently do</MenuItem>
        <MenuItem value="less urgently do">Less urgently do</MenuItem>
        <MenuItem value="not urgent">Not urgent</MenuItem>
      </Select>
      {error && <FormHelperText sx={{ color: 'red' }}>Choise is required</FormHelperText>}
    </FormControl>
  );
};

export default SelectComponent;
