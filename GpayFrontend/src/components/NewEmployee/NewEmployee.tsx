import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { ROUTES } from '../../constant/routes';
import { useCreateEmployee } from '../../hooks/useApi';
import Input from '../ui/Input';
import { InputGroup } from '../ui/Input.styles';
import { ButtonContainer, Header, HeaderContainer, SubmitButton } from './NewEmployee.styles';

const NewEmployee = () => {
  const navigate = useNavigate();
  const header = 'add a new gigger'

  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [phoneNumber, SetPhoneNumber] = useState('');
  const [country, SetCountry] = useState('');

  const { postData, isError, isLoading } = useCreateEmployee(name, email, phoneNumber, country);

  const submitEmployeeClickHandler = () => {
    postData();
    navigate(ROUTES.Home);
  };

  return (
    <>
      <HeaderContainer>
        <Header>{header}</Header>
      </HeaderContainer>
      {isError && <h1>Error</h1>}
      {isLoading && <h1>Loading</h1>}
      <InputGroup>
        <Input
          label="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => { SetName(event.target.value); }}
        />
        <Input
          label="phone number"
          type="text"
          placeholder="phone number"
          value={phoneNumber}
          onChange={(event) => { SetPhoneNumber(event.target.value); }}
        />
        <Input
          label="e-mail"
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(event) => { SetEmail(event.target.value); }}
        />
        <Input
          label="country"
          type="text"
          placeholder="country"
          value={country}
          onChange={(event) => { SetCountry(event.target.value); }}
        />
      </InputGroup>
      <ButtonContainer>
        <SubmitButton
          onClick={submitEmployeeClickHandler}
          disabled={!name || !phoneNumber || !email || !country}
        >
          submit
        </SubmitButton>
      </ButtonContainer>
    </>
  )
}

export default NewEmployee