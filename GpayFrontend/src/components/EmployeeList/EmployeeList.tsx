import React from 'react'
import { EmployeeData } from '../../constant/types';
import { dateFormatter } from '../../helpers/dateFormatter';
import { useDeletEmployee, useFetchEmployees } from '../../hooks/useApi';
import LoadError from '../../utils/LoadError';
import Loading from '../../utils/Loading';
import {
  StyledTable,
  TR,
  TH,
  TD,
  THead,
  TBody,
  TableContainer,
  ButtonDeleteEmployee,
  EmptyContent
} from './EmployeeList.styles';

const EmployeeList = () => {
  const { employeeData, isError, isLoading } = useFetchEmployees();
  const { deleteEmployee } = useDeletEmployee();

  const deleteEmployeeClickHandler = (id: string) => {
    deleteEmployee(id);
    window.location.reload();
  };

  return (
    <>
      {isLoading && <Loading list="Giggers list is  " />}
      {isError && <LoadError list="Giggers list " />}
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
                  <TD>{dateFormatter(employee.InDtTm)}</TD>
                  <TD>
                    <ButtonDeleteEmployee
                      onClick={() => deleteEmployeeClickHandler(employee.id)}
                    >
                      X
                    </ButtonDeleteEmployee>
                  </TD>
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