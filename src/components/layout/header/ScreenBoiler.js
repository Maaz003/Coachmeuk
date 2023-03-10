import R from '@components/utils/R';
import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import SubHeaderComponent from '../subHeader';

export default function ScreenBoiler(props) {
  const {navigation, children, headerProps} = props;
  const {isSubHeader} = headerProps;

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        style={{flex: 0}}
        backgroundColor={R.color.white}
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
      />

      {isSubHeader && (
        <SubHeaderComponent navigation={navigation} headerProps={headerProps} />
      )}
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: R.unit.width(1),
    backgroundColor: R.color.white,
    alignItems: 'center',
  },
});
