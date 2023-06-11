/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect } from 'react';

import {
  TextField, FormControlLabel, Checkbox,
} from '@mui/material';
import TextAreaComponent from '../TextAreaComponent/TextAreaComponent';
import { TaskFields, FormValues, TaskProps } from '../../types/types';
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

const Task = ({ formValues, changeTodoFunc } : TaskProps) => {
  const {
    id, titleTask, description, importance, numberTask,
  } = formValues;
  const [title, setTitle] = useState(titleTask);
  const [isChecked, setIsChecked] = useState(false);
  const [descState, setDescState] = useState(description);
  const [stateTask, setStateTask] = useState<FormValues>({
    titleTask, isChecked, description, id, importance,
  });

  const [descIsOpen, setDescIsOpen] = useState(false);

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescState(event.target.value);
  };

  const handleVisibilityDesc = () => setDescIsOpen((prev) => !prev);

  useEffect(() => {
    changeTodoFunc({
      titleTask: title,
      description: descState,
      importance,
      id,
      isChecked,
    });
  }, [isChecked, descState, title]);

  // console.log(stateTask);
  return (
    <div className="task">
      <div className='task-wrapper'>
        <div className='task-head'>
          <div className="task-number">
            {numberTask}
          </div>
          <TextField
            defaultValue={title}
            placeholder='Title your todo'
            sx={{
              flex: '1 1 auto',
            }}
            onChange={handleChangeTitle}
            autoComplete='off'
          />
        </div>
        <div className="task-desc">
          <h6
            className="desc-title"
            onClick={handleVisibilityDesc}
          >
            Read description...
          </h6>
          <TextAreaComponent
            changeState={handleChangeDesc}
            value={descState}
            visibility={descIsOpen}
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
