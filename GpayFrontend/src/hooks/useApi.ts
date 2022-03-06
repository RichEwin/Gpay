import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export const useCreateEmployee = (name: string, phoneNumber: string, email: string, country: string) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const giggerData = {
    phoneNumber,
    name,
    email,
    country,
  };

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
  const [employeeData, setEmployeeData] = useState([]);
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
