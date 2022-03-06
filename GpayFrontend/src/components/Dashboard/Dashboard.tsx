import React from 'react'
import { ButtonAddEmployee, Header, HeaderContainer } from './Dashboard.styles';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../constant/routes';
import EmployeeList from '../EmployeeList/EmployeeList';

const Dashboard = () => {
  const header = 'giggers';
  const navigate = useNavigate();

  const addEmployeeClickHandler = () => {
    navigate(ROUTES.Employees);
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
      <EmployeeList />
    </>
  )
}

export default Dashboard;