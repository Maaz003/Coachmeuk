import React, {useState, useRef} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {login} from '@store/auth/authSlice';
import {URL} from '@config/apiUrl';
import FormValidation from '@components/utils/FormValidation';
import Text from '@components/common/Text';
import AuthBoiler from '@components/layout/authHeader/AuthBoiler';
import Toast from '@components/common/Toast';
import TextInput from '@components/common/TextInput';
import Button from '@components/common/Button';
import R from '@components/utils/R';
import OrDivider from '@components/common/OrDivider';
import AuthSwitch from '@components/common/AuthSwitch';

function LoginScreen(props) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const loginURL = URL('auth/login');
  const headerProps = {
    isSubHeader: false,
  };
  const [authUser, setAuthUser] = useState({
    email: '',
    password: '',
  });
  const [errorField, setErrorField] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const emailField = useRef();
  const passwordField = useRef();

  const onSubmit = async () => {
    setIsLoading(true);
    const reqData = {
      email: authUser?.email,
      password: authUser?.password,
    };
    const formError = FormValidation(reqData);
    if (formError) {
      setIsLoading(false);
      const obj = {};
      formError?.errorArr?.map(item => {
        obj[item] = formError?.message;
      });
      setErrorField({
        ...{
          email: '',
          password: '',
        },
        ...obj,
      });
    } else {
      setErrorField({
        email: '',
        password: '',
      });
      setIsLoading(false);
      dispatch(login({isAuth: true, isCoach: false}));
      Toast.show({
        title: 'Hurrah!',
        message: 'Login Succesfully',
        type: 'success',
      });
      // navigation.navigate('SignupSuccess');
    }
  };

  return (
    <AuthBoiler {...props} headerProps={headerProps}>
      <KeyboardAwareScrollView
        style={[R.styles.container, styles.mainLayout]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <View style={styles.formView}>
          <Text
            variant={'h3'}
            font={'RalewayMedium'}
            gutterTop={10}
            gutterBottom={R.unit.scale(24)}
            color={R.color.black}
            align={'left'}
            style={{width: '100%'}}
            transform={'none'}>
            Welcome back
          </Text>

          <TextInput
            secureText={false}
            title={'Email'}
            onChangeText={text => {
              setAuthUser({...authUser, email: text});
            }}
            color={R.color.black}
            value={authUser?.email}
            gutterBottom={24}
            returnKeyType={'next'}
            forwardedRef={emailField}
            onSubmitEditing={() => {
              passwordField.current.focus();
            }}
            formError={errorField?.email}
            formErrorText={errorField?.email}
            iconName={'close'}
            iconType={'MaterialIcons'}
          />
          <TextInput
            secureText={true}
            title={'Password'}
            onChangeText={text => {
              setAuthUser({...authUser, password: text});
            }}
            forwardedRef={passwordField}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            color={R.color.black}
            value={authUser?.password}
            gutterBottom={32}
            isRightTitle={true}
            formError={errorField?.password}
            formErrorText={errorField?.password}
            backgroundColor={'white'}
          />

          <Button
            value="Login"
            bgColor={R.color.mainColor}
            width={'100%'}
            size={'lg'}
            color={R.color.white}
            loader={isLoading}
            gutterBottom={16}
            disabled={false}
            loaderColor={R.color.white}
            onPress={onSubmit}
            borderWidth={1}
          />

          <AuthSwitch
            screen={'SelectRole'}
            text="Don’t have an account?"
            linkText="Get started"
            textColor={R.color.mainColor2}
            iconColor={R.color.mainColor2}
          />
        </View>
      </KeyboardAwareScrollView>
    </AuthBoiler>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
    paddingHorizontal: 0,
  },
  formView: {
    paddingHorizontal: R.unit.scale(16),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: R.unit.scale(10),
    marginTop: R.unit.scale(84),
  },
  socialButtonsLayout: {marginTop: R.unit.scale(16), width: '100%'},
});
