import { useState, useEffect } from 'react';
import {
  TextField, FormControlLabel, Checkbox,
} from '@mui/material';
import { TaskFields, FormValues } from '../../types/types';
import './Task.scss';

const style = {
  '&.MuiFormControlLabel-root': {
    margin: 0,
  },
  '&.MuiCheckbox-root': {
    margin: 0,
    transition: 'all .3s ease',
    color: '#307bcb',
    boxShadow: 3,
  },
  '&.Mui-checked': {
    transition: 'all .3s ease',
  },
  '&:hover': {
    boxShadow: 6,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem',
  },
};

const Task = ({
  submitCount, titleTask, desc, importance,
} : FormValues) => {
  const [title, setTitle] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [stateTask, setStateTask] = useState<TaskFields>({ title, isChecked });

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    setStateTask({ title, isChecked });
  }, [title, isChecked]);

  return (
    <div className="task">
      <div className="task-number">
        {submitCount}
      </div>
      <TextField
        defaultValue={titleTask}
        sx={{
          flex: '1 1 auto',
        }}
        onChange={handleChangeTitle}
      />
      <FormControlLabel
        sx={{
          '&.MuiFormControlLabel-root': {
            margin: '-4px 0px 0px 0px',
          },
        }}
        control={(
          <Checkbox
            checked={isChecked}
            onChange={handleChangeCheckBox}
            sx={style}
          />
          )}
        label=''
      />
    </div>
  );
};

export default Task;
