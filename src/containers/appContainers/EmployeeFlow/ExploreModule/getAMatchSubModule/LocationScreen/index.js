import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import StudentGetAMatchBoiler from '@components/layout/StudentGetAMatchLayout/StudentGetAMatchBoiler';
import DropDown from '@components/common/DropDown';
import {LocationMiles} from '@components/constants/studentData';

function LocationScreen(props) {
  const {navigation} = props;
  const [location, setLocation] = useState('10 miles radius');

  const submit = () => {
    navigation.navigate('CoachQualitiesScreen', {});
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <StudentGetAMatchBoiler
      onPressNextButton={submit}
      onPressBackButton={goBack}>
      <KeyboardAwareScrollView
        style={styles.mainLayout}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <View style={R.styles.contentView}>
          <Text
            variant={'body3'}
            font={'InterRegular'}
            color={R.color.gray}
            gutterBottom={8}
            align={'center'}
            transform={'none'}>
            4 out of 6
          </Text>
          <Text
            variant={'h3'}
            font={'Sequel551'}
            gutterBottom={12}
            color={R.color.black}
            align={'center'}
            transform={'none'}>
            Location
          </Text>
          <Text
            variant={'body3'}
            font={'InterRegular'}
            gutterBottom={24}
            color={R.color.gray}
            align={'center'}
            transform={'none'}>
            Where would you want to take your lessons.
          </Text>

          <DropDown
            zIndex={2000}
            zIndexInverse={2000}
            zIndexIOS={1000}
            width={0.9}
            gutterTop={24}
            inputContainerStyle={styles.dropDownContainer}
            title={'Search within'}
            arrayData={LocationMiles}
            placeholder={location}
            loaderParentCall={data => {
              setLocation(data.value);
            }}
            value={location}
          />
          <View style={styles.mapLayout}></View>
        </View>
      </KeyboardAwareScrollView>
    </StudentGetAMatchBoiler>
  );
}
export default LocationScreen;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
    paddingHorizontal: 0,
  },

  mapView: {
    height: R.unit.scale(330),
  },
  dropDownView: {
    width: '100%',
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  mapLayout: {
    overflow: 'hidden',
    borderRadius: R.unit.scale(6),
    marginTop: R.unit.scale(44),
    marginBottom: R.unit.scale(32),
  },
  placesTextContainer: {
    borderRadius: R.unit.scale(10),
    height: 300,
    opacity: 5.5,
    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    elevation: 24,
  },
  dropDownContainer: {
    borderRadius: R.unit.scale(10),
    height: 300,
    opacity: 5.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    elevation: 24,
    marginTop: R.unit.scale(10),
  },
});
