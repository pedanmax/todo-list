/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react';
import {
  TextField, Stack, MenuItem, Select, FormControl, InputLabel, FormHelperText,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import Context from '../../Context';
import { FormValues } from '../../types/types';
import './Form.scss';

const Form = () => {
  const { addTodoToState, titleRef } = useContext(Context);
  const form = useForm<FormValues>({
    defaultValues: {
      titleTask: '',
      description: '',
      importance: '',
      id: 0,
      isChecked: false,
    },
  });
  const {
    handleSubmit, formState, reset, control,
  } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    const submitedData: FormValues = {
      titleTask: data.titleTask,
      description: data.description,
      importance: data.importance,
      id: Math.floor(Math.random() * 100),
      isChecked: false,
    };

    addTodoToState(submitedData);
    reset({
      titleTask: '',
      description: '',
      importance: '',
      id: 0,
      isChecked: false,
    });
  };
  return (
    <form
      className='form'
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <FormControl sx={{ flex: '1 1 25%', cursor: 'pointer' }}>
          <Controller
            control={control}
            name="titleTask"
            defaultValue=''
            rules={{
              required: {
                value: true, message: 'Title is required',
              },
            }}
            render={({ field: { ...field } }) => (
              <TextField
                {...field}
                inputRef={titleRef}
                id="titleTask"
                variant="outlined"
                error={!!errors.titleTask}
                label="Title"
                autoComplete='off'
              />
            )}
          />
          <FormHelperText sx={{ color: 'red' }}>{errors.titleTask?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ flex: '1 1 25%', cursor: 'pointer' }}>
          <Controller
            control={control}
            name="description"
            defaultValue=''
            rules={{
              required: {
                value: true, message: 'Description is required',
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                {...field}
                inputRef={ref}
                id="description"
                variant="outlined"
                error={!!errors.description}
                label="description"
                autoComplete='off'
              />
            )}
          />
          <FormHelperText sx={{ color: 'red' }}>{errors.description?.message}</FormHelperText>
        </FormControl>

        <FormControl sx={{ flex: '1 1 25%', cursor: 'pointer' }}>
          <InputLabel id="test">Importance</InputLabel>
          <Controller
            render={({ field }) => (
              <Select
                {...field}
                labelId="test"
                label='importance'
                error={!!errors.importance}
              >
                <MenuItem value="urgently do">Urgently do</MenuItem>
                <MenuItem value="less urgently do">Less urgently do</MenuItem>
                <MenuItem value="not urgent">Not urgent</MenuItem>
              </Select>
            )}
            rules={{
              required: {
                value: true, message: 'Choise is requierd',
              },
            }}
            control={control}
            name="importance"
            defaultValue=''
          />
          <FormHelperText sx={{ color: 'red' }}>{errors.importance?.message}</FormHelperText>
        </FormControl>
        <ButtonComponent />
      </Stack>
    </form>
  );
};
export default Form;
