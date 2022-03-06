import React from 'react'
import { ButtonContainer, Header, HeaderContainer, SubmitButton } from './NewEmployee.styles';

const NewEmployee = () => {
  const header = 'add a new gigger'

  const submitEmployeeClickHandler = () => {
  };


  return (
    <>
      <HeaderContainer>
        <Header>{header}</Header>
      </HeaderContainer>
      <ButtonContainer>
        <SubmitButton
          onClick={submitEmployeeClickHandler}
        >
          submit
        </SubmitButton>
      </ButtonContainer>
    </>
  )
}

export default NewEmployee