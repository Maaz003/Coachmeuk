import React from 'react';
import {useSelector} from 'react-redux';
import AppStack from './appStack';
import AuthStack from './authStack';

const AppNavigator = () => {
  const auth = useSelector(state => state.auth);
  // let isLogin = true;
  let isLogin = auth?.isAuth;

  return isLogin ? <AppStack /> : <AuthStack />;
};
export default AppNavigator;
