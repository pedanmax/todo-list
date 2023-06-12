/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect, useContext } from 'react';

import {
  TextField, FormControlLabel, Checkbox, IconButton,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TextAreaComponent from '../TextAreaComponent/TextAreaComponent';
import Context from '../../Context';
import { TaskProps } from '../../types/types';
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
    fontSize: '1.5rem',
  },
};

const Task = ({ formValues, disabled } : TaskProps) => {
  const {
    id, titleTask, description, importance, numberTask, isChecked,
  } = formValues;
  const [title, setTitle] = useState(titleTask);
  const [isCheckedState, setIsCheckedState] = useState(isChecked);
  const [descState, setDescState] = useState(description);
  const [descIsOpen, setDescIsOpen] = useState(false);

  const { removeTodoFunc, updateTodos } = useContext(Context);

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedState(event.target.checked);
  };
  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescState(event.target.value);
  };

  const handleVisibilityDesc = () => setDescIsOpen((prev) => !prev);

  useEffect(() => {
    updateTodos(
      id,
      {
        titleTask: title,
        description: descState,
        importance,
        id,
        isChecked: isCheckedState,
      },
    );
  }, [isCheckedState, descState, title]);

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
            disabled={disabled}
          />
        </div>
        <div className="task-desc">
          <h6
            className="desc-title"
            onClick={handleVisibilityDesc}
          >
            {descIsOpen ? 'Hide description' : 'Read description'}
          </h6>
          <TextAreaComponent
            changeState={handleChangeDesc}
            value={descState}
            visibility={descIsOpen}
            disabled={disabled}
          />
        </div>
      </div>
      <FormControlLabel
        sx={{
          '&.MuiFormControlLabel-root': {
            margin: '0px 0px 0px 0px',
          },
        }}
        control={(
          <Checkbox
            checked={isCheckedState}
            onChange={handleChangeCheckBox}
            sx={style}
          />
            )}
        label=''
      />
      <IconButton
        onClick={() => removeTodoFunc(id)}
        sx={{
          width: '42px',
          height: '42px',
          minWidth: 0,
          '&.MuiIconButton-root': {
            boxShadow: 3,
            transition: 'all .3s ease',
          },
          '&:hover': {
            boxShadow: 6,
            border: 'none',
          },
        }}
      >
        <HighlightOffIcon color='primary' sx={{ height: '1.4em', width: '1.4em' }} />
      </IconButton>
    </div>
  );
};

export default Task;
