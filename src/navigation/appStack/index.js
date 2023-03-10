import React from 'react';
import {useSelector} from 'react-redux';
import CompanyStack from './CompanyStack';
import EmployeeStack from './EmployeeStack';

const AppStack = () => {
  const auth = useSelector(state => state.auth);
  return true ? <CompanyStack /> : <EmployeeStack />;
};
export default AppStack;
