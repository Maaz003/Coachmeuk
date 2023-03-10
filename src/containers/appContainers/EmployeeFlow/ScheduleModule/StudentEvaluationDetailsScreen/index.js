import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, ScrollView, Platform, Keyboard} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import {MasterCardIcon} from '@components/utils/Svg';
import Button from '@components/common/Button';
import SingleTitleHeader from '@components/layout/SingleTitleHeader';
import TextInput from '@components/common/TextInput';
import LessonStatusModal from '@components/view/modal/StudentModals/LessonStatusModal';

function StudentEvaluationDetailsScreen(props) {
  const {navigation} = props;
  const isFocused = useIsFocused();
  const inputRef = useRef();
  const [isModal, setIsModal] = useState(false);
  const [text, setText] = useState(
    'Vitae fames a consectetur ut adipiscing vestibulum, auctor donec facilisi. Arcu sed facilisi egestas facilisi cras egestas mauris aenean nisl. Massa, leo felis, vel donec morbi dignissim bibendum a ac. Sit mi, magna semper ut. Congue justo, sapien duis dui suspendisse.Vitae fames a consectetur ut adipiscing vestibulum, auctor donec facilisi. Arcu sed facilisi egestas facilisi cras egestas mauris aenean nisl. Massa, leo felis, vel donec morbi dignissim bibendum a ac. Sit mi, magna semper ut. Congue justo, sapien duis dui suspendisse.',
  );
  const [isFocusedKeyboard, setIsFocusedKeyboard] = useState(false);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarVisible: false,
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarVisible: true,
      });
  }, [navigation, isFocused]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      // setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsFocusedKeyboard(false);
      inputRef.current.blur();
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const submit = () => {
    setIsModal(!isModal);
    setIsFocusedKeyboard(false);
  };

  const cancelled = () => {
    setIsFocusedKeyboard(false);
    Keyboard.dismiss();
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
        keyboardShouldPersistTaps="handled"
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

        <Text
          variant={'h6'}
          font={'Sequel551'}
          color={R.color.blackShade4}
          align={'left'}
          gutterTop={48}
          gutterBottom={8}
          transform={'none'}>
          Performance evaluation
        </Text>

        <Text
          variant={'body2'}
          font={'InterRegular'}
          color={R.color.gray}
          align={'left'}
          gutterTop={8}
          gutterBottom={16}
          transform={'none'}>
          Every session is based on the athlete's skill level and prior
          knowledge of the sport. If my student needs to work on improving a
          specific move or drill for a team or their own personal aspirations, I
          am always open to working through it.
        </Text>

        <Text
          variant={'h6'}
          font={'Sequel551'}
          color={R.color.blackShade4}
          align={'left'}
          gutterTop={48}
          gutterBottom={8}
          transform={'none'}>
          Your feedback of the lesson
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
        <TextInput
          secureText={false}
          forwardedRef={inputRef}
          onChangeText={text => {
            setText(text);
          }}
          onSubmitEditing={() => console.log('SDASDASDA')}
          onFocus={() => setIsFocusedKeyboard(true)}
          blurOnSubmit={true}
          value={text}
          borderColor={isFocusedKeyboard ? R.color.blackShade4 : R.color.gray4}
          color={isFocusedKeyboard ? R.color.blackShade4 : R.color.gray}
          gutterBottom={16}
          backgroundColor={R.color.white}
          multiline={true}
          numberOfLines={60}
          height={R.unit.height(0.4)}
          returnKeyType={'done'}
        />

        {isFocusedKeyboard && (
          <View style={R.styles.rowView}>
            <Button
              value={'Cancel'}
              bgColor={R.color.white}
              width={'48%'}
              size={'lg'}
              color={R.color.black}
              disabled={false}
              borderColor={R.color.gray4}
              borderWidth={1}
              onPress={cancelled}
            />
            <Button
              value={'Update'}
              bgColor={R.color.mainColor}
              width={'48%'}
              size={'lg'}
              color={R.color.white}
              borderColor={R.color.gray4}
              borderWidth={1}
              loaderColor={R.color.white}
              onPress={submit}
            />
          </View>
        )}

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
        <Button
          value={'Report a problem'}
          bgColor={R.color.white}
          width={'100%'}
          size={'lg'}
          color={R.color.black}
          borderColor={R.color.gray4}
          disabled={false}
          loaderColor={R.color.white}
          borderWidth={0.75}
          onPress={submit}
          iconName={'flag-outline'}
          iconType={'Ionicons'}
          iconColor={R.color.black}
        />
      </View>
      <LessonStatusModal
        isVisibleModal={isModal}
        isIcon={true}
        inPassed={true}
        title={'Updated'}
        text={'We’ve updated your feedback and send Jessica the notification!'}
      />
    </View>
  );
}
export default StudentEvaluationDetailsScreen;

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
  scrollContainer: {
    maxHeight: R.unit.height(Platform.OS === 'ios' ? 0.83 : 0.89),
    paddingTop: R.unit.scale(24),
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: R.unit.scale(16),
    paddingBottom: R.unit.scale(80),
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
    borderTopWidth: R.unit.scale(1),
    borderTopColor: R.color.gray4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: R.unit.scale(16),
  },
});
