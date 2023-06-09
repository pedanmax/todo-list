import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface TextInputProps {
  type: string,
  label: string,
  name: string,
  refProp?: UseFormRegister<FieldValues>,
}

export interface FormValues {
  titleTask:string,
  desc:string,
  importance: string,
  numberTask: number,
}

export interface TaskFields {
  title: string,
  isChecked: boolean,
  descState: string,
}

export interface TodosProps {
  todos:FormValues[],
}

export type AddingTodoFunc = (value: FormValues) => void;
