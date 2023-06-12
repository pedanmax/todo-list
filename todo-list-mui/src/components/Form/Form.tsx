/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react';
import { TextField, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import SelectComponent from '../SelectComponent/SelectComponent';
import Context from '../../Context';
import { FormValues } from '../../types/types';
import './Form.scss';

const Form = () => {
  const { addTodoToState } = useContext(Context);
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
    register, handleSubmit, formState, reset,
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
    reset();
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
        <TextField
          label='Title todo'
          type='text'
          {...register(
            'titleTask',
            { required: 'Title is required' },
          )}
          error={!!errors.titleTask}
          helperText={errors.titleTask?.message}
          sx={{ flex: '1 1 25%', cursor: 'pointer' }}
          autoComplete='off'
        />
        <TextField
          label='Description todo'
          type='text'
          {...register('description', { required: 'Description is required' })}
          error={!!errors.description}
          helperText={errors.description?.message}
          sx={{ flex: '1 1 25%', cursor: 'pointer' }}
          autoComplete='off'
        />
        <SelectComponent refProp={register} error={!!errors.importance} />
        <ButtonComponent />
      </Stack>
    </form>
  );
};

export default Form;
