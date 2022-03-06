import React from 'react'
import { EmployeeData } from '../../constant/types';
import { useFetchEmployees } from '../../hooks/useApi';
import {
  StyledTable,
  TR,
  TH,
  TD,
  THead,
  TBody,
  TableContainer,
} from './EmployeeList.styles';

const EmployeeList = () => {
  const { employeeData, isError, isLoading } = useFetchEmployees();

  console.log(employeeData)

  return (
    <>
      <TableContainer>
        {employeeData.length > 0 &&
          <StyledTable>
            <THead>
              <TR>
                <TH>Name</TH>
                <TH>E-mail</TH>
                <TH>Phone Number</TH>
                <TH>Country</TH>
                <TH>Date Created</TH>
              </TR>
            </THead>
            <TBody>
              {employeeData.map((employee: EmployeeData) => (
                <TR key={employee.id}>
                  <TD>{employee.name}</TD>
                  <TD>{employee.phoneNumber}</TD>
                  <TD>{employee.email}</TD>
                  <TD>{employee.country}</TD>
                  <TD>{employee.InDtTm}</TD>
                </TR>
              ))}
            </TBody>
          </StyledTable>
        }
      </TableContainer>
    </>
  )
}

export default EmployeeList