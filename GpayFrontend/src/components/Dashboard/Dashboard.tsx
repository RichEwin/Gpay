import React from 'react'
import { ButtonAddEmployee, Header, HeaderContainer } from './Dashboard.styles';

const Dashboard = () => {
  const header = 'giggers';
  return (
    <>
      <HeaderContainer>
        <Header>{header}</Header>
        <ButtonAddEmployee
        >
          add gigger
        </ButtonAddEmployee>
      </HeaderContainer>
    </>
  )
}

export default Dashboard;