/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import { TextField, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import SelectComponent from '../SelectComponent/SelectComponent';
import { FormValues } from '../../types/types';
import './Form.scss';

const Form = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      title: '',
      desc: '',
      importance: '',
    },
  });
  const {
    register, handleSubmit, formState, reset,
  } = form;
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    console.log(data);
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
            'title',
            { required: 'Title is required' },
          )}
          error={!!errors.title}
          helperText={errors.title?.message}
          sx={{ flex: '1 1 25%' }}
        />
        <TextField
          label='Description todo'
          type='text'
          {...register('desc', { required: 'Description is required' })}
          error={!!errors.desc}
          helperText={errors.desc?.message}
          sx={{ flex: '1 1 25%' }}
        />
        <SelectComponent refProp={register} error={!!errors.importance} />
        <ButtonComponent />
      </Stack>
    </form>
  );
};

export default Form;
