import React from 'react';
import {View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import {Logo} from '@components/utils/Svg';

function FormScrollContainer(props) {
  const {
    contentContainerStyles,
    containerStyles,
    children,
    showAuthHeader,
    keyboardShouldPersistTaps = 'always',
    linearColors = [R.color.mainColor, R.color.mainColor2],
    paddingBottom = 0,
  } = props;

  return (
    <KeyboardAwareScrollView
      style={[R.styles.container, styles.mainLayout, containerStyles]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      contentContainerStyle={[
        styles.contentContainer,
        contentContainerStyles,
        {paddingBottom: R.unit.scale(paddingBottom)},
      ]}>
      {showAuthHeader && (
        <LinearGradient colors={linearColors} style={styles.gradientView}>
          <View style={{marginTop: R.unit.height(0.08)}}>
            <Logo />
          </View>
          <Text
            variant={'h2'}
            font={'RalewayExtraBold'}
            gutterTop={10}
            gutterBottom={R.unit.scale(24)}
            color={R.color.white}
            align={'center'}
            style={{width: '100%'}}
            transform={'none'}>
            Coachmeuk.com
          </Text>
        </LinearGradient>
      )}
      {children}
    </KeyboardAwareScrollView>
  );
}
export default FormScrollContainer;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
  },
  gradientView: {
    width: R.unit.height(1),
    height: R.unit.height(0.5),
    borderBottomRightRadius: R.unit.height(1),
    borderBottomLeftRadius: R.unit.height(1),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
