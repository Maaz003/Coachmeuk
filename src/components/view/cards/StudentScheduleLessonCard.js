import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import {
  CalendarReqIcon,
  ClockReqIcon,
  LocationReqIcon,
} from '@components/utils/Svg';
import Divider from '@components/common/Divider';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import CancelLessonStudentModal from '@components/view/modal/StudentModals/CancelLessonStudentModal';
import ReportLessonStudentModal from '@components/view/modal/StudentModals/ReportLessonStudentModal';
import navigationService from '@components/navigation/navigationService';

function StudentScheduleLessonCard(props) {
  const {item, index, arr} = props;
  const [isCancelLessonModal, setIsCancelLessonModal] = useState(false);
  const [isReportModal, setIsReportModal] = useState(false);

  const openCancelModal = () => {
    setIsCancelLessonModal(!isCancelLessonModal);
  };

  const openReportModal = () => {
    setIsReportModal(!isReportModal);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.mainCardLayout}
        activeOpacity={0.7}
        onPress={() => {
          navigationService.navigate('StudentLessonDetails', {
            isCompleted: item?.isCompleted,
          });
        }}>
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
          <View style={styles.svgView}>
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

        <View style={[R.styles.twoItemsRow, styles.detailView]}>
          <View style={styles.svgView}>
            <LocationReqIcon height="100%" width="100%" />
          </View>
          <Text
            variant={'body3'}
            font={'InterRegular'}
            color={R.color.gray}
            align={'left'}
            style={{marginLeft: R.unit.scale(8)}}
            transform={'none'}>
            {item?.location}
          </Text>
        </View>

        {item?.isCompleted ? (
          <View style={{...R.styles.rowView, marginTop: R.unit.scale(24)}}>
            <Text
              variant={'body3'}
              font={'InterRegular'}
              color={R.color.blackShade4}
              align={'left'}
              transform={'none'}>
              {item?.timeLeft}
            </Text>
            <View style={[R.styles.twoItemsRow, styles.buttonLayout]}>
              <TouchableOpacity
                style={styles.messageButton}
                activeOpacity={0.6}>
                <Icon
                  type={'Ionicons'}
                  name={'chatbubble-ellipses-outline'}
                  color={R.color.blackShade4}
                  size={20}
                />
              </TouchableOpacity>

              <Button
                value={'Cancel'}
                bgColor={R.color.white}
                width={'85%'}
                size={'lg'}
                font={'InterMedium'}
                variant={'body3'}
                color={R.color.black}
                borderColor={R.color.gray4}
                disabled={false}
                loaderColor={R.color.white}
                borderWidth={0.75}
                onPress={openCancelModal}
              />
            </View>
          </View>
        ) : (
          <View style={{...R.styles.rowView, marginTop: R.unit.scale(24)}}>
            <TouchableOpacity
              style={styles.messageButton}
              activeOpacity={0.6}
              onPress={openReportModal}>
              <Icon
                type={'Ionicons'}
                name={'flag-outline'}
                color={R.color.blackShade4}
                size={20}
              />
            </TouchableOpacity>

            <Button
              value={'Leave review'}
              bgColor={R.color.white}
              width={'80%'}
              size={'lg'}
              font={'InterMedium'}
              variant={'body3'}
              color={R.color.black}
              borderColor={R.color.gray4}
              disabled={false}
              loaderColor={R.color.white}
              borderWidth={0.75}
              onPress={() => null}
            />
          </View>
        )}

        {index !== arr.length - 1 && (
          <Divider
            lineStyles={{
              marginVertical: R.unit.scale(24),
            }}
          />
        )}
      </TouchableOpacity>
      <CancelLessonStudentModal isVisibleModal={isCancelLessonModal} />
      <ReportLessonStudentModal isVisibleModal={isReportModal} />
    </>
  );
}
export default StudentScheduleLessonCard;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
    paddingHorizontal: 0,
    flex: 1,
    marginTop: R.unit.scale(24),
  },
  contentContainer: {
    paddingHorizontal: R.unit.scale(16),
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  svgView: {
    aspectRatio: 1,
    height: R.unit.scale(17),
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
    marginTop: R.unit.scale(12),
  },
  buttonLayout: {
    flex: 0.85,
    justifyContent: 'flex-end',
  },
  messageButton: {
    padding: R.unit.scale(
      Platform.OS == 'ios' && R.unit.width(1) > 1000 ? 16 : 16.5,
    ),
    borderColor: R.color.gray4,
    borderWidth: R.unit.scale(0.75),
    borderRadius: R.unit.scale(10),
    marginRight: R.unit.scale(8),
  },
});
