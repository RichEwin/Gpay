import React from 'react'
import { useFetchEmployees } from '../../hooks/useApi';

const EmployeeList = () => {
  const { employeeData, isError, isLoading } = useFetchEmployees();

  console.log(employeeData)

  return (
    <div>EmployeeList</div>
  )
}

export default EmployeeList