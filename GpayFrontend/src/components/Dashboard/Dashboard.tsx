import React from 'react'
import { ButtonAddEmployee, Header, HeaderContainer } from './Dashboard.styles';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const header = 'giggers';
  const navigate = useNavigate();

  const addEmployeeClickHandler = () => {
    navigate('/employees');
  }

  return (
    <>
      <HeaderContainer>
        <Header>{header}</Header>
        <ButtonAddEmployee
          onClick={addEmployeeClickHandler}
        >
          add gigger
        </ButtonAddEmployee>
      </HeaderContainer>
    </>
  )
}

export default Dashboard;