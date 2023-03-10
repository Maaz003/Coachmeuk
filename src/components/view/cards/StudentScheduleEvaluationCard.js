import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import {CalendarReqIcon, ClockReqIcon} from '@components/utils/Svg';
import Divider from '@components/common/Divider';
import navigationService from '@components/navigation/navigationService';

function StudentScheduleEvaluationCard(props) {
  const {item, index, arr} = props;

  return (
    <>
      <TouchableOpacity
        style={styles.mainCardLayout}
        activeOpacity={0.7}
        onPress={() => navigationService.navigate('StudentEvaluationDetails')}>
        <View style={[R.styles.twoItemsRow, styles.titleView]}>
          <Image
            source={R.image.BaseBallSport()}
            resizeMode={'cover'}
            style={styles.image}
          />
          <Text
            variant={'h6'}
            font={'Sequel551'}
            color={R.color.black}
            align={'left'}
            style={{maxWidth: '80%'}}
            numberOfLines={3}
            transform={'none'}>
            {item?.title}
          </Text>
        </View>

        <View style={R.styles.twoItemsRow}>
          <View style={R.styles.twoItemsRow}>
            <View style={styles.calendarSvgView}>
              <CalendarReqIcon height="100%" width="100%" />
            </View>
            <Text
              variant={'body3'}
              font={'InterRegular'}
              color={R.color.gray}
              align={'left'}
              style={{marginLeft: R.unit.scale(8)}}
              transform={'none'}>
              {item?.date}
            </Text>
          </View>

          <View style={[R.styles.twoItemsRow, styles.detailView]}>
            <View style={styles.svgView}>
              <ClockReqIcon height="100%" width="100%" />
            </View>
            <Text
              variant={'body3'}
              font={'InterRegular'}
              color={R.color.gray}
              align={'left'}
              style={{marginLeft: R.unit.scale(8)}}
              transform={'none'}>
              {item?.time}
            </Text>
          </View>
        </View>

        <Text
          variant={'body3'}
          font={'InterRegular'}
          color={R.color.gray}
          align={'left'}
          gutterTop={16}
          transform={'none'}>
          {item?.description}
        </Text>

        {index !== arr.length - 1 && (
          <Divider
            lineStyles={{
              marginVertical: R.unit.scale(24),
            }}
          />
        )}
      </TouchableOpacity>
    </>
  );
}
export default StudentScheduleEvaluationCard;

const styles = StyleSheet.create({
  svgView: {
    aspectRatio: 1,
    height: R.unit.scale(14),
  },
  calendarSvgView: {
    aspectRatio: 1,
    height: R.unit.scale(18),
  },
  mainCardLayout: {
    backgroundColor: R.color.white,
  },
  titleView: {
    marginBottom: R.unit.scale(27),
  },
  image: {
    width: R.unit.scale(64),
    height: R.unit.scale(88),
    borderRadius: R.unit.scale(10),
    marginRight: R.unit.scale(16),
  },
  detailView: {
    marginLeft: R.unit.scale(16),
  },
});
