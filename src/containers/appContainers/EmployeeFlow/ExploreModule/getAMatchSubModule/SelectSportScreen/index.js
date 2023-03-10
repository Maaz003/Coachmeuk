import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import StudentGetAMatchBoiler from '@components/layout/StudentGetAMatchLayout/StudentGetAMatchBoiler';
import {SportsData} from '@components/constants/sportsData';
import Toast from '@components/common/Toast';

function SelectSportScreen(props) {
  const {navigation} = props;
  const [params, setParams] = useState({});

  const selectedSport = data => {
    console.log(data);
    setParams(data);
  };

  const submit = () => {
    if (Object.keys(params).length === 0) {
      Toast.show({
        title: 'Please select an option',
        type: 'danger',
      });
    } else {
      navigation.navigate('ConveneintTime', {
        paramsData: params,
      });
    }
  };

  return (
    <StudentGetAMatchBoiler isBothButtons={false} onPressNextButton={submit}>
      <ScrollView
        style={[R.styles.container, styles.mainLayout]}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.container}>
        <View style={R.styles.contentView}>
          <Text
            variant={'body2'}
            font={'InterRegular'}
            gutterBottom={8}
            color={R.color.gray}
            align={'center'}
            transform={'none'}>
            1 out of 6
          </Text>
          <Text
            variant={'h3'}
            font={'Sequel551'}
            gutterBottom={16}
            color={R.color.black}
            align={'center'}
            transform={'none'}>
            Let's find the right coach for you
          </Text>
          <Text
            variant={'body2'}
            font={'InterRegular'}
            gutterBottom={24}
            color={R.color.gray}
            align={'center'}
            transform={'none'}>
            What kind of sport are you interested in?
          </Text>
          <View style={styles.sportDataContainer}>
            {SportsData?.map((item, index) => {
              return (
                <TouchableOpacity
                  style={[R.styles.twoItemsRow, styles.listView]}
                  activeOpacity={0.9}
                  onPress={() => selectedSport(item)}
                  key={index}>
                  <Image source={item?.image} />
                  <Text
                    variant={'h6'}
                    font={'Sequel551'}
                    color={
                      params?.id === item?.id
                        ? R.color.mainColor
                        : R.color.black
                    }
                    align={'center'}
                    style={{marginLeft: R.unit.scale(24)}}
                    transform={'none'}>
                    {item?.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </StudentGetAMatchBoiler>
  );
}
export default SelectSportScreen;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
  },
  listView: {
    width: '100%',
    marginTop: R.unit.scale(24),
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  sportDataContainer: {
    marginBottom: R.unit.scale(38),
  },
});
