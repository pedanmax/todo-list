import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface TextInputProps {
  type: string,
  label: string,
  name: string,
  refProp?: UseFormRegister<FieldValues>,
}

export interface FormValues {
  titleTask:string,
  description:string,
  importance: string,
  id: number,
  numberTask?: number,
  isChecked: boolean,
}

export interface TaskFields {
  title: string,
  isChecked: boolean,
  descState: string,
}

export interface TodosProps {
  todos:FormValues[],
}

export interface TaskProps {
  formValues: FormValues,
}

export type Store = {
  removeTodoFunc: (id:number) => void,
  updateTodos: (id:number, stateTask: FormValues) => void,
  addTodoToState: (value: FormValues) => void;
  todos: FormValues[];
};

export type AddingTodoFunc = (value: FormValues) => void;

export type ChangeTodoFunc = (value: FormValues) => void;
