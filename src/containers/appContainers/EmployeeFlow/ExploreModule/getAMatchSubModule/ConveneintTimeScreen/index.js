import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import StudentGetAMatchBoiler from '@components/layout/StudentGetAMatchLayout/StudentGetAMatchBoiler';
import {conveveintTimeData} from '@components/constants/studentData';

function ConveneintTimeScreen(props) {
  const {navigation} = props;

  const [params, setParams] = useState({});
  const [isActive, setIsActive] = useState(0);

  const selectedSport = (data, id) => {
    setIsActive(id);
    setParams(data);
    console.log(params, isActive);
  };

  const submit = () => {
    navigation.navigate('DateAvailability', {
      paramsData: null,
    });
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <StudentGetAMatchBoiler
      onPressNextButton={submit}
      onPressBackButton={goBack}>
      <ScrollView
        style={[R.styles.container, styles.mainLayout]}
        showsVerticalScrollIndicator={false}>
        <View style={R.styles.contentView}>
          <Text
            variant={'body2'}
            font={'InterRegular'}
            color={R.color.gray}
            align={'center'}
            gutterBottom={8}
            transform={'none'}>
            2 out of 6
          </Text>
          <Text
            variant={'h3'}
            font={'Sequel551'}
            gutterBottom={16}
            color={R.color.black}
            align={'center'}
            transform={'none'}>
            What time works best for you
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
        </View>

        <View style={styles.boxView}>
          {conveveintTimeData?.map((item, index) => {
            return (
              <View>
                <TouchableOpacity
                  style={[
                    R.styles.twoItemsRow,
                    R.styles.listView,
                    index === isActive ? styles.buttonActive : styles.button,
                  ]}
                  activeOpacity={0.9}
                  onPress={() => selectedSport(item, index)}
                  key={index}>
                  <Image
                    style={[
                      index === isActive
                        ? styles.activeIconColor
                        : styles.iconColor,
                    ]}
                    source={item?.image}
                  />
                </TouchableOpacity>
                <Text
                  variant={'body1'}
                  font={'InterMedium'}
                  color={R.color.black}
                  gutterTop={8}
                  align={'center'}
                  transform={'none'}>
                  {item?.timing}
                </Text>
                <Text
                  variant={'body2'}
                  font={'InterMedium'}
                  color={R.color.gray}
                  gutterTop={8}
                  width={'100%'}
                  align={'center'}
                  transform={'none'}>
                  {item?.title}
                </Text>
                <View
                  style={[
                    styles.horizontalLine,
                    index === isActive ? styles.dividerActive : styles.divider,
                  ]}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </StudentGetAMatchBoiler>
  );
}

export default ConveneintTimeScreen;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
  },

  buttonActive: {
    backgroundColor: '#EDF0F7',
  },
  button: {
    backgroundColor: 'white',
  },
  horizontalLine: {
    height: R.unit.scale(2),
    width: '100%',
    marginBottom: R.unit.scale(24),
    marginTop: R.unit.scale(10),
  },
  dividerActive: {
    backgroundColor: '#4D55E5',
  },
  divider: {
    backgroundColor: '#EDEDED',
  },
  activeIconColor: {
    tintColor: '#4D55E5',
  },
  iconColor: {
    tintColor: '#B5B5B5',
  },
  boxView: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: R.unit.scale(16),
    marginTop: R.unit.scale(24),
    marginBottom: R.unit.scale(36),
  },
});
