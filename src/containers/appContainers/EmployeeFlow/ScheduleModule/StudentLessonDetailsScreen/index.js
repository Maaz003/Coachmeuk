import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import {MasterCardIcon} from '@components/utils/Svg';
import {useIsFocused} from '@react-navigation/native';
import {provided, sessionLocations, skillLevel} from '@components/constants';
import Icon from '@components/common/Icon';
import Button from '@components/common/Button';
import SingleTitleHeader from '@components/layout/SingleTitleHeader';
import HoverText from '@components/common/HoverText';
import CancelLessonStudentModal from '@components/view/modal/StudentModals/CancelLessonStudentModal';
import ReportLessonStudentModal from '@components/view/modal/StudentModals/ReportLessonStudentModal';
import ButtonIcon from '@components/common/ButtonIcon';

function StudentLessonDetailsScreen(props) {
  const {navigation} = props;
  const isFocused = useIsFocused();
  const {isCompleted} = props.route.params;
  const [isCancelLessonModal, setIsCancelLessonModal] = useState(false);
  const [isReportModal, setIsReportModal] = useState(false);
  const [buttonTitle, setButtonTitle] = useState('Cancel the lesson');
  const [iconName, setIconName] = useState('');

  useEffect(() => {
    if (isCompleted) {
      setButtonTitle('Cancel the lesson');
      setIconName('chatbubble-ellipses-outline');
    } else {
      setButtonTitle('Leave a review');
      setIconName('flag-outline');
    }
  }, []);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarVisible: false,
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarVisible: true,
      });
  }, [navigation, isFocused]);

  const submit = () => {
    if (isCompleted) {
      openCancelModal();
    }
  };

  const openCancelModal = () => {
    setIsCancelLessonModal(!isCancelLessonModal);
  };

  const openReportModal = () => {
    setIsReportModal(!isReportModal);
  };

  const openLeftControl = () => {
    if (!isCompleted) {
      openReportModal();
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainLayout}>
      <SingleTitleHeader
        title={'Lesson details'}
        isCustomBack={true}
        customBack={goBack}
        headerStyles={styles.headerStyles}
      />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <Text
          variant={'h3'}
          font={'Sequel551'}
          color={R.color.blackShade4}
          align={'left'}
          transform={'none'}>
          1-on-1 Tennis Lesson with Michael Baumgardner
        </Text>

        {!isCompleted && (
          <View style={[R.styles.rowView, styles.reviewView]}>
            <View>
              <Text
                variant={'body2'}
                font={'InterSemiBold'}
                color={R.color.black}
                align={'left'}
                transform={'none'}>
                How was your lesson?
              </Text>
              <Text
                variant={'body3'}
                font={'InterMedium'}
                color={R.color.gray}
                align={'left'}
                transform={'none'}>
                Tell us about your experiecne with Michael Baumgardner.
              </Text>
            </View>

            <Icon
              name={'keyboard-arrow-right'}
              type={'MaterialIcons'}
              color={R.color.black}
              size={20}
            />
          </View>
        )}

        <Text
          variant={'body2'}
          font={'InterRegular'}
          color={R.color.gray}
          align={'left'}
          gutterTop={!isCompleted ? 16 : 8}
          gutterBottom={16}
          transform={'none'}>
          Every session is based on the athlete's skill level and prior
          knowledge of the sport. If my student needs to work on improving a
          specific move or drill for a team or their own personal aspirations, I
          am always open to working through it.
        </Text>

        {skillLevel?.map((item, index) => {
          return (
            <Text
              variant={'body2'}
              font={'InterRegular'}
              color={R.color.gray}
              align={'left'}
              gutterBottom={4}
              transform={'none'}>
              {index + 1}. {item.title}
            </Text>
          );
        })}

        <Text
          variant={'h6'}
          font={'Sequel551'}
          color={R.color.blackShade4}
          align={'left'}
          gutterTop={48}
          gutterBottom={8}
          transform={'none'}>
          Notes from the coach
        </Text>

        <Text
          variant={'body2'}
          font={'InterRegular'}
          color={R.color.gray}
          align={'left'}
          transform={'none'}>
          Please bring a tennis racket. See you then!
        </Text>

        <Text
          variant={'h6'}
          font={'Sequel551'}
          color={R.color.blackShade4}
          align={'left'}
          gutterTop={48}
          gutterBottom={16}
          transform={'none'}>
          What’s provided
        </Text>

        <View style={[R.styles.rowView, styles.rowWrap]}>
          {provided?.map(item => {
            return (
              <View style={[R.styles.twoItemsRow, styles.items]}>
                <Icon
                  name={'check'}
                  type={'MaterialIcons'}
                  color={R.color.hyperLinkColor}
                  size={16}
                  iconStyles={{marginRight: R.unit.scale(16)}}
                />
                <Text
                  variant={'body2'}
                  font={'InterRegular'}
                  color={R.color.blackShade4}
                  align={'left'}
                  transform={'none'}>
                  {item.title}
                </Text>
              </View>
            );
          })}
        </View>

        <Text
          variant={'h6'}
          font={'Sequel551'}
          color={R.color.blackShade4}
          align={'left'}
          gutterTop={48}
          gutterBottom={8}
          transform={'none'}>
          What to bring
        </Text>

        <Text
          variant={'body2'}
          font={'InterRegular'}
          color={R.color.blackShade4}
          align={'left'}
          gutterBottom={16}
          transform={'none'}>
          Things that the coach does not provide should be taken by yourself.
        </Text>

        <View style={[R.styles.rowView, styles.rowWrap]}>
          {provided?.map((item, index) => {
            return (
              <View style={[R.styles.twoItemsRow, styles.items]}>
                <Icon
                  type={'MaterialIcons'}
                  name={'close'}
                  color={R.color.mainColor}
                  size={16}
                  iconStyles={{marginRight: R.unit.scale(16)}}
                />
                <Text
                  variant={'body2'}
                  font={'InterRegular'}
                  color={R.color.blackShade4}
                  align={'left'}
                  transform={'none'}>
                  {item.title}
                </Text>
              </View>
            );
          })}
        </View>

        <Text
          variant={'h6'}
          font={'Sequel551'}
          color={R.color.blackShade4}
          align={'left'}
          gutterTop={48}
          gutterBottom={16}
          transform={'none'}>
          Getting there
        </Text>

        {sessionLocations?.map((item, index) => {
          return (
            <View style={{marginBottom: R.unit.scale(24)}}>
              <Text
                variant={'body2'}
                font={'InterSemiBold'}
                color={R.color.blackShade4}
                align={'left'}
                gutterBottom={8}
                transform={'none'}>
                {item.venue}
              </Text>
              <Text
                variant={'body2'}
                font={'InterRegular'}
                color={R.color.blackShade4}
                align={'left'}
                gutterBottom={12}
                transform={'none'}>
                {item.direction}
              </Text>
              <HoverText text={'Get directions'} />
            </View>
          );
        })}

        <Text
          variant={'h6'}
          font={'Sequel551'}
          color={R.color.blackShade4}
          align={'left'}
          gutterTop={48}
          gutterBottom={16}
          transform={'none'}>
          Payment
        </Text>

        <View style={[R.styles.rowView, styles.paymentView]}>
          <View style={R.styles.twoItemsRow}>
            <View style={styles.svgView}>
              <MasterCardIcon />
            </View>
            <View>
              <Text
                variant={'body4'}
                font={'InterRegular'}
                color={R.color.black}
                align={'left'}
                transform={'none'}>
                Paid with card ending 0084
              </Text>
              <View style={R.styles.rowView}>
                <Text
                  variant={'body4'}
                  font={'InterRegular'}
                  color={R.color.gray}
                  align={'left'}
                  transform={'none'}>
                  Aug 12, 2021
                </Text>
                <View style={R.styles.dot} />
                <Text
                  variant={'body4'}
                  font={'InterRegular'}
                  color={R.color.gray}
                  align={'left'}
                  transform={'none'}>
                  02:06pm
                </Text>
              </View>
            </View>
          </View>

          <Text
            variant={'body2'}
            font={'Sequel551'}
            color={R.color.black}
            align={'left'}
            transform={'none'}>
            $75
          </Text>
        </View>
      </ScrollView>

      <View style={[R.styles.rowView, styles.buttonContainer]}>
        <ButtonIcon
          onPress={openLeftControl}
          iconType={'Ionicons'}
          iconName={iconName}
        />

        <Button
          value={buttonTitle}
          bgColor={isCompleted ? R.color.white : R.color.mainColor}
          width={'80%'}
          size={'lg'}
          font={'InterMedium'}
          variant={'body3'}
          color={isCompleted ? R.color.blackShade4 : R.color.white}
          borderColor={isCompleted ? R.color.gray4 : R.color.mainColor}
          disabled={false}
          loaderColor={R.color.white}
          borderWidth={0.75}
          onPress={submit}
        />
      </View>
      <CancelLessonStudentModal isVisibleModal={isCancelLessonModal} />
      <ReportLessonStudentModal isVisibleModal={isReportModal} />
    </View>
  );
}
export default StudentLessonDetailsScreen;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  headerStyles: {
    paddingHorizontal: R.unit.scale(12),
    marginBottom: 0,
  },
  reviewView: {
    padding: R.unit.scale(16),
    borderRadius: R.unit.scale(10),
    backgroundColor: R.color.gray8,
    marginTop: R.unit.scale(16),
  },
  scrollContainer: {
    maxHeight: R.unit.height(Platform.OS === 'ios' ? 0.83 : 0.89),
    paddingTop: R.unit.scale(24),
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: R.unit.scale(50),
    paddingHorizontal: R.unit.scale(16),
  },
  dot: {
    height: R.unit.scale(4),
    width: R.unit.scale(4),
    backgroundColor: R.color.gray5,
    borderRadius: R.unit.scale(29),
    marginHorizontal: R.unit.scale(8),
  },
  svgView: {
    marginRight: R.unit.scale(14),
  },
  rowWrap: {
    flexWrap: 'wrap',
  },
  items: {
    width: '50%',
    paddingBottom: R.unit.scale(16),
  },
  paymentView: {
    padding: R.unit.scale(16),
    borderColor: R.color.gray4,
    borderWidth: R.unit.scale(0.75),
    borderRadius: R.unit.scale(10),
  },
  buttonContainer: {
    width: '100%',
    borderTopWidth: R.unit.scale(0.75),
    borderTopColor: R.color.gray4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: R.unit.scale(16),
  },
  cancelButton: {},
});
