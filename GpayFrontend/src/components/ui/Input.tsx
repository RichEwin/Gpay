import React from 'react';
import { onChangeEvent } from '../../constant/types';
import { InputField, InputLabel } from './Input.styles';

interface InputProps {
  onChange: onChangeEvent;
  type: string;
  placeholder: string;
  value: string;
  label: string | boolean;
}

const Input = ({
  label, type, placeholder, value, onChange,
}: InputProps) => (
  <>
    <InputLabel htmlFor={value}>{label}</InputLabel>
    <InputField
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </>
);

export default Input;
