import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@containers/authContainers/loginScreen';
import signupScreen from '@containers/authContainers/SignUpModule/signUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@components/navigation/navigationService';
import SignUpSuccessScreen from '@containers/authContainers/SignUpModule/signUpSucessScreen';
import ForgetPasswordScreen from '@containers/authContainers/ForgetPasswordModule/forgetPasswordScreen';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Login'}>
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={signupScreen} />
        <Stack.Screen name="SignupSuccess" component={SignUpSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
