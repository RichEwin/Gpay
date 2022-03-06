import React from 'react';

export type onClickEvent = React.MouseEventHandler<HTMLButtonElement>;
export type onChangeEvent = React.ChangeEventHandler<HTMLInputElement>;

export interface EmployeeData {
  id: string;
  InDtTm: Date;
  phoneNumber: string;
  name: string;
  email: string;
  country: string;
}
