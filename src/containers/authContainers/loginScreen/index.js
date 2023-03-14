import React, {useState, useRef} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '@store/auth/authSlice';
import {URL} from '@config/apiUrl';
import FormScrollContainer from '@components/view/screens/FormScrollContainer';
import FormValidation from '@components/utils/FormValidation';
import Text from '@components/common/Text';
import AuthBoiler from '@components/layout/authHeader/AuthBoiler';
import Toast from '@components/common/Toast';
import TextInput from '@components/common/TextInput';
import Button from '@components/common/Button';
import R from '@components/utils/R';
import AuthSwitch from '@components/common/AuthSwitch';
import {EmailIcon, LockIcon} from '@components/utils/Svg';

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
      <FormScrollContainer showAuthHeader={true} paddingBottom={40}>
        <View style={styles.contentView}>
          <Text
            variant={'h1'}
            font={'RalewayExtraBold'}
            gutterTop={10}
            color={R.color.black}
            align={'left'}
            transform={'none'}>
            Login
          </Text>
          <Text
            variant={'body4'}
            font={'RalewayMedium'}
            gutterTop={20}
            color={R.color.gray}
            align={'left'}
            style={{width: '100%'}}
            transform={'none'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>

          <TextInput
            secureText={false}
            onChangeText={text => {
              setAuthUser({...authUser, email: text});
            }}
            color={R.color.black}
            placeholder={'Email Address'}
            value={authUser?.email}
            gutterTop={20}
            widthInPercentage={'100%'}
            returnKeyType={'next'}
            forwardedRef={emailField}
            onSubmitEditing={() => {
              passwordField.current.focus();
            }}
            formError={errorField?.email}
            formErrorText={errorField?.email}
            iconName={'close'}
            customLeftIcon={
              <View style={{paddingLeft: R.unit.scale(13)}}>
                <EmailIcon />
              </View>
            }
          />
          <TextInput
            secureText={true}
            onChangeText={text => {
              setAuthUser({...authUser, password: text});
            }}
            placeholder={'Password'}
            forwardedRef={passwordField}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            gutterTop={12}
            widthInPercentage={'100%'}
            color={R.color.black}
            value={authUser?.password}
            gutterBottom={32}
            isRightTitle={true}
            formError={errorField?.password}
            iconName={'close'}
            customLeftIcon={
              <View style={styles.lockSvg}>
                <LockIcon height="100%" width="100%" />
              </View>
            }
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
            screen={'Signup'}
            text="Don’t have an account?"
            linkText="Get started"
            textColor={R.color.mainColor2}
            iconColor={R.color.mainColor2}
            containerStyles={{justifyContent: 'center'}}
          />
        </View>
      </FormScrollContainer>
    </AuthBoiler>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  contentView: {
    paddingHorizontal: R.unit.scale(16),
    width: '90%',
    justifyContent: 'center',
    paddingVertical: R.unit.scale(10),
    backgroundColor: R.color.white,
    marginTop: R.unit.scale(-80),
    borderRadius: R.unit.scale(5),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lockSvg: {
    paddingLeft: R.unit.scale(13),
    aspectRatio: 1,
    height: R.unit.scale(25),
  },
});
