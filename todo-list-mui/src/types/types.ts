import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface TextInputProps {
  type: string,
  label: string,
  name: string,
  refProp?: UseFormRegister<FieldValues>,
}

export interface FormValues {
  title:string,
  desc:string,
  importance: string,
}
