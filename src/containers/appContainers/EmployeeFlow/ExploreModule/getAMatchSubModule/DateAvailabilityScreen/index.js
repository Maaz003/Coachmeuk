import React from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import R from '@components/utils/R';
import StudentGetAMatchBoiler from '@components/layout/StudentGetAMatchLayout/StudentGetAMatchBoiler';
import Text from '@components/common/Text';
import Calendarr from '@containers/appContainers/CompanyFlow/ScheduleModule/Calendars/components/Calender';
function DateAvailability(props) {
  const {navigation} = props;

  const submit = () => {
    navigation.navigate('LocationScreen', {
      paramsData: {},
    });
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <StudentGetAMatchBoiler
      onPressNextButton={submit}
      onPressBackButton={goBack}>
      <KeyboardAwareScrollView
        style={[R.styles.container, styles.mainLayout]}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <Text
          variant={'body2'}
          font={'InterRegular'}
          gutterBottom={8}
          gutterTop={24}
          color={R.color.gray}
          align={'center'}
          transform={'none'}>
          3 out of 6
        </Text>
        <Text
          variant={'h3'}
          font={'Sequel551'}
          gutterBottom={16}
          color={R.color.black}
          align={'center'}
          transform={'none'}>
          Date Availability
        </Text>
        <Text
          variant={'body2'}
          font={'InterRegular'}
          gutterBottom={24}
          color={R.color.gray}
          align={'center'}
          transform={'none'}>
          Choose the most convenient times for you
        </Text>
        <View style={styles.calenderContainer}>
          <Calendarr
            onChange={({startDate, endDate}) =>
              console.log({startDate, endDate})
            }
          />
        </View>
      </KeyboardAwareScrollView>
    </StudentGetAMatchBoiler>
  );
}
export default DateAvailability;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
  },
  calenderContainer: {
    height: R.unit.scale(400),
    width: R.unit.scale(400),
    paddingHorizontal: R.unit.scale(16),
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
