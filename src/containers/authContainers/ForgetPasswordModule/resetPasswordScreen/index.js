import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import TextInput from '@components/common/TextInput';
import Button from '@components/common/Button';
import AuthBoiler from '@components/layout/authHeader/AuthBoiler';
import AuthSwitch from '@components/common/AuthSwitch';
import FormValidation from '@components/utils/FormValidation';

function ResetPasswordScreen(props) {
  const dispatch = useDispatch();
  const {navigation} = props;

  const [isLoading, setIsLoading] = useState(false);
  const headerProps = {
    isSubHeader: true,
  };

  const [authUser, setAuthUser] = useState({
    password: '',
  });
  const [errorField, setErrorField] = useState({
    password: '',
  });

  const onSubmit = () => {
    setIsLoading(true);
    const reqData = {
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
          password: '',
        },
        ...obj,
      });
    } else {
      setErrorField({
        password: '',
      });
      setIsLoading(false);
      navigation.navigate('Login', {
        password: authUser?.password,
      });
    }
  };

  return (
    <AuthBoiler {...props} headerProps={headerProps}>
      <ScrollView
        style={[R.styles.container, styles.mainLayout]}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <View style={styles.formView}>
          <Text
            variant={'h3'}
            font={'Sequel551'}
            color={R.color.black}
            align={'left'}
            gutterBottom={16}
            transform={'none'}>
            Reset password{' '}
          </Text>
          <Text
            variant={'body2'}
            font={'InterRegular'}
            color={R.color.gray}
            align={'left'}
            gutterBottom={24}
            transform={'none'}>
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
          </Text>
          <TextInput
            secureText={false}
            title={'New Password'}
            onChangeText={text => {
              setAuthUser({...authUser, password: text});
            }}
            color={R.color.black}
            value={authUser?.password}
            gutterBottom={12}
            returnKeyType={'done'}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            formError={errorField?.password}
            formErrorText={errorField?.password}
          />
          <View
            style={{
              alignItems: 'center',
            }}>
            {authUser?.password?.length < 4 && (
              <Text
                variant={'body3'}
                font={'InterRegular'}
                color={R.color.gray}
                align={'left'}
                style={{width: '100%'}}
                gutterBottom={24}
                transform={'none'}>
                Please use 8+ characters for secure password
              </Text>
            )}
          </View>

          <Button
            value="Reset password"
            bgColor={R.color.mainColor}
            width={'100%'}
            size={'lg'}
            color={R.color.white}
            loader={isLoading}
            disabled={false}
            loaderColor={R.color.white}
            onPress={onSubmit}
            borderWidth={1}
          />
        </View>

        <AuthSwitch
          screen={'SelectRole'}
          text="Don’t have an account?"
          linkText="Get started"
        />
      </ScrollView>
    </AuthBoiler>
  );
}
export default ResetPasswordScreen;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
    paddingHorizontal: 0,
  },
  formView: {
    paddingHorizontal: R.unit.scale(16),
    width: '100%',
    justifyContent: 'center',
    marginTop: R.unit.scale(16),
  },

  forgetPassView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
