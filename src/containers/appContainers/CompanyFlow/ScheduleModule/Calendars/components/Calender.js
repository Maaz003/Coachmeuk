import R from '@components/utils/R';
import React from 'react';
import {View} from 'react-native';
import Calendar from 'react-native-calendar-range-picker';

export default function Calendarr(props) {
  const {onChange} = props;

  return (
    <View>
      <Calendar
        startDate="2021-08-01"
        //endDate="2020-05-12"
        onChange={onChange}
        style={{
          container: {},
          monthContainer: {},
          weekContainer: {},
          monthNameText: {},
          dayNameText: {},
          dayText: {},
          holidayColor: '#B5B5B5',
          dayTextColor: 'black',
          todayColor: 'white',
          disabledTextColor: 'white',
          selectedDayTextColor: 'white',
          selectedDayBackgroundColor: '#4D55E5',
          selectedBetweenDayTextColor: '#4D55E5',
          selectedBetweenDayBackgroundTextColor: '#EDF0F7',
        }}
      />
    </View>
  );
}
