import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { EmployeeData } from '../constant/types';
import { giggerData } from '../constant/types'

const headers = {
  'Content-Type': 'application/json',
};

export const useCreateEmployee = (giggerData: giggerData) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const postData = (): void => {
    setIsLoading(true);
    axios
      .post('http://localhost:3002/api/employees', giggerData, { headers })
      .then((response: AxiosResponse) => {
        setIsLoading(false);
        console.log(response);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  return {
    postData, isError, isLoading,
  };
};


export const useFetchEmployees = () => {
  const [employeeData, setEmployeeData] = useState<EmployeeData[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:3002/api/employees')
      .then((response: AxiosResponse) => {
        setIsLoading(false);
        setEmployeeData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);
  return { employeeData, isError, isLoading };
};

export const useDeletEmployee = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const deleteEmployee = (id: string): void => {
    setIsLoading(true);
    axios
      .delete(`http://localhost:3002/api/employees/${id}`)
      .then((response: AxiosResponse) => {
        setIsLoading(false);
        console.log(response);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };
  return {
    deleteEmployee, isError, isLoading,
  };
};