import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView, View} from 'react-native';
import AuthHeaderComponent from './AuthHeaderComponent';
import R from '@components/utils/R';

export default function AuthBoiler(props) {
  const {navigation, children, headerProps} = props;
  const {isSubHeader} = headerProps;

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        backgroundColor={'white'}
        style={{flex: 0, backgroundColor: 'white', color: 'white'}}
        barStyle={'dark-content'}
      />

      {isSubHeader && (
        <AuthHeaderComponent
          navigation={navigation}
          headerProps={headerProps}
        />
      )}

      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.green,
    paddingHorizontal: 0,
  },
  background: {
    flex: 1,
    width: R.unit.width(1),
    backgroundColor: R.color.green,
    alignItems: 'center',
  },
});
