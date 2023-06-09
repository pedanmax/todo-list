import { useState, useEffect } from 'react';

import {
  TextField, FormControlLabel, Checkbox, TextareaAutosize,
} from '@mui/material';
import TextAreaComponent from '../TextAreaComponent/TextAreaComponent';
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
  numberTask, titleTask, desc, importance,
} : FormValues) => {
  const [title, setTitle] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [descState, setDescState] = useState('');
  const [stateTask, setStateTask] = useState<TaskFields>({ title, isChecked, descState });

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescState(event.target.value);
  };

  useEffect(() => {
    setStateTask({ title, isChecked, descState });
  }, [title, isChecked, descState]);

  return (
    <div className="task">
      <div className='task-wrapper'>
        <div className='task-head'>
          <div className="task-number">
            {numberTask}
          </div>
          <TextField
            defaultValue={titleTask}
            placeholder='Title your todo'
            sx={{
              flex: '1 1 auto',
            }}
            onChange={handleChangeTitle}
            autoComplete='off'
          />
        </div>
        <div className="task-desc">
          <h6 className="desc-title">Read description</h6>
          <TextAreaComponent
            changeState={handleChangeDesc}
            value={desc}
          />
        </div>
      </div>
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
