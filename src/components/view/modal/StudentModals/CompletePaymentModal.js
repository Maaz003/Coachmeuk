import React, {useEffect, useState, useRef} from 'react';
import {
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';
import Button from '@components/common/Button';
import CancellationPolicyModal from './CancellationPolicyModal';
import RadioButtonLine from '@components/common/RadioButtonLine';
import TextInput from '@components/common/TextInput';
import Divider from '@components/common/Divider';
import {InfoIcon} from '@components/utils/Svg';
import CheckBoxLine from '@components/common/CheckBoxLine';
import BookingCongratsModal from './BookingCongratsModal';
import BookingFailModal from './BookingFailModal';

function CompletePaymentModal(props) {
  const scrollRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [isCancellationPolicyModal, setCancellationPolicyModal] =
    useState(false);
  const [isCongratsModal, setCongratsModal] = useState(false);
  const [isFailModal, setIsFailModal] = useState(false);
  const [activeBookingType, setActiveBookingType] = useState(0);
  const [triggerModal, setTriggerModal] = useState(false);
  const [authUser, setAuthUser] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiry: '',
    cvc: '',
    alwaysSelect: false,
  });
  const [errorField, setErrorField] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiry: '',
    cvc: '',
  });

  const bookingTypes = [
    {
      title: 'Visa •••• 3679 (expires 12/24)',
      isChecked: false,
      index: 0,
    },
    {
      title: 'MasterCard •••• 2193 (expires 03/22)',
      isChecked: false,
      index: 1,
    },
    {
      title: 'New payment method',
      isChecked: false,
      index: 2,
    },
  ];

  useEffect(() => {
    setModalVisible(!modalVisible);
  }, [props.isVisibleModal]);

  useEffect(() => {
    if (!isBlur) setModalVisible(false);
  }, [isBlur]);

  const closeModal = () => {
    setIsBlur(false);
  };

  const openProvidedModal = () => {
    setCancellationPolicyModal(!isCancellationPolicyModal);
  };

  const selectBookingType = data => {
    scrollRef?.current?.scrollTo({
      x: 0,
      y: R.unit.height(data === 0 ? 0.4 : 0.8),
    });
    setActiveBookingType(data);
  };

  const completePayment = () => {
    if (!triggerModal) {
      setCongratsModal(!isCongratsModal);
    } else {
      setIsFailModal(!isFailModal);
    }
    setTriggerModal(!triggerModal);
  };

  return (
    <>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
        onShow={() => {
          setIsBlur(true);
        }}>
        <SafeAreaView style={styles.modalView}>
          <View style={[R.styles.rowView, styles.header]}>
            <TouchableOpacity
              style={styles.cancelButton}
              activeOpacity={0.6}
              onPress={closeModal}>
              <Icon
                type={'Ionicons'}
                name={'close'}
                color={R.color.blackShade4}
                size={20}
              />
            </TouchableOpacity>

            <Text
              variant={'body2'}
              font={'InterSemiBold'}
              color={R.color.blackShade4}
              align={'center'}
              style={{flex: 1, marginRight: R.unit.scale(30)}}
              transform={'none'}>
              Confirm and Pay
            </Text>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            ref={scrollRef}
            style={styles.scrollContainer}
            contentContainerStyle={styles.contentContainerStyle}>
            <View style={R.styles.rowView}>
              <Text
                variant={'body1'}
                font={'Sequel551'}
                color={R.color.black}
                align={'left'}
                lineHeight={25}
                transform={'none'}>
                Lesson details
              </Text>
              <Text
                variant={'body1'}
                font={'Sequel551'}
                color={R.color.black}
                align={'left'}
                lineHeight={25}
                transform={'none'}>
                $85
              </Text>
            </View>
            <Divider lineStyles={{marginVertical: R.unit.scale(24)}} />

            <Text
              variant={'body1'}
              font={'Sequel551'}
              color={R.color.black}
              align={'left'}
              lineHeight={25}
              transform={'none'}>
              Payment details
            </Text>

            <Text
              variant={'body2'}
              font={'InterRegular'}
              color={R.color.blackShade4}
              align={'left'}
              gutterTop={8}
              transform={'none'}>
              Payment will be charged after the lesson.
            </Text>

            {bookingTypes?.map(item => {
              return (
                <RadioButtonLine
                  selected={activeBookingType === item?.index}
                  onPress={() => selectBookingType(item?.index)}
                  text={item?.title}
                  textColor={
                    activeBookingType === item?.index
                      ? R.color.black
                      : R.color.gray
                  }
                  containerStyles={{marginTop: R.unit.scale(24)}}
                />
              );
            })}
            {activeBookingType === bookingTypes.length - 1 && (
              <View style={{marginTop: R.unit.scale(24)}}>
                <TextInput
                  secureText={false}
                  title={'Card number'}
                  onChangeText={text => {
                    setAuthUser({...authUser, cardNumber: text});
                  }}
                  color={R.color.black}
                  value={authUser?.cardNumber}
                  gutterBottom={24}
                  isRightTitle={false}
                  formError={errorField?.cardNumber}
                  formErrorText={errorField?.cardNumber}
                  backgroundColor={'white'}
                  keyboardType={'numeric'}
                />

                <TextInput
                  secureText={false}
                  title={'Cardholder’s name'}
                  onChangeText={text => {
                    setAuthUser({...authUser, expiry: text});
                  }}
                  color={R.color.black}
                  value={authUser?.expiry}
                  gutterBottom={24}
                  isRightTitle={false}
                  formError={errorField?.expiry}
                  formErrorText={errorField?.expiry}
                  backgroundColor={'white'}
                />

                <TextInput
                  secureText={false}
                  title={'Expiration date'}
                  onChangeText={text => {
                    setAuthUser({...authUser, cardHolderName: text});
                  }}
                  color={R.color.black}
                  value={authUser?.cardHolderName}
                  isRightTitle={false}
                  gutterBottom={24}
                  formError={errorField?.cardHolderName}
                  formErrorText={errorField?.cardHolderName}
                  backgroundColor={'white'}
                />

                <TextInput
                  secureText={false}
                  title={'CVC'}
                  onChangeText={text => {
                    setAuthUser({...authUser, cvc: text});
                  }}
                  color={R.color.black}
                  value={authUser?.cvc}
                  isSubTitle={true}
                  subTitleIcon={
                    <View style={styles.svgView}>
                      <InfoIcon height="100%" width="100%" />
                    </View>
                  }
                  isRightTitle={false}
                  formError={errorField?.cvc}
                  gutterBottom={24}
                  formErrorText={errorField?.cvc}
                  backgroundColor={'white'}
                />
                <CheckBoxLine
                  selected={authUser?.alwaysSelect}
                  text={
                    'Save payment information to my account for future purchases'
                  }
                  textColor={
                    authUser?.alwaysSelect ? R.color.black : R.color.gray
                  }
                  containerStyles={{alignItems: 'flex-start'}}
                  onPress={() =>
                    setAuthUser({
                      ...authUser,
                      alwaysSelect: !authUser?.alwaysSelect,
                    })
                  }
                />
              </View>
            )}
            <Text
              variant={'body1'}
              font={'Sequel551'}
              color={R.color.black}
              align={'left'}
              gutterTop={56}
              lineHeight={25}
              transform={'none'}>
              Cancellation policy
            </Text>
            <Text
              variant={'body3'}
              font={'InterRegular'}
              color={R.color.gray}
              align={'left'}
              transform={'none'}>
              Free cancellation up to 24 hours before lesson starts. If you
              cancel a class less than 24 hours before the start of the lesson,
              the booking will not be refunded.{' '}
              <Text
                variant={'body3'}
                font={'InterSemiBold'}
                color={R.color.hyperLinkColor}
                align={'left'}
                onPress={openProvidedModal}
                transform={'none'}>
                Learn more
              </Text>
            </Text>
            <Text
              variant={'body3'}
              font={'InterRegular'}
              gutterTop={32}
              gutterBottom={12}
              color={R.color.gray}
              align={'left'}
              transform={'none'}>
              By clicking the button below I accept Lytesnap’s terms of use
            </Text>
            {Platform.OS === 'android' && (
              <TouchableOpacity
                style={styles.applePayButton}
                activeOpacity={0.7}>
                <Text
                  variant={'body2'}
                  font={'InterSemiBold'}
                  color={R.color.black}
                  align={'left'}
                  style={{marginRight: R.unit.scale(8)}}
                  transform={'none'}>
                  Pay using
                </Text>
                <Icon
                  name={'apple1'}
                  type={'AntDesign'}
                  color={R.color.black}
                  size={15}
                />
                <Text
                  variant={'body2'}
                  font={'InterSemiBold'}
                  color={R.color.black}
                  align={'left'}
                  transform={'none'}>
                  Pay
                </Text>
              </TouchableOpacity>
            )}

            <Button
              value={'Proceed with payment'}
              bgColor={R.color.mainColor}
              width={'100%'}
              size={'lg'}
              color={R.color.white}
              borderWidth={1}
              borderColor={R.color.mainColor}
              onPress={completePayment}
            />
          </ScrollView>
        </SafeAreaView>

        <CancellationPolicyModal isVisibleModal={isCancellationPolicyModal} />
        <BookingCongratsModal isVisibleModal={isCongratsModal} />
        <BookingFailModal isVisibleModal={isFailModal} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: R.color.white,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    paddingTop: R.unit.scale(24),
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: R.unit.scale(16),
    paddingBottom: R.unit.scale(50),
  },
  header: {
    padding: R.unit.scale(16),
    borderBottomColor: R.color.gray4,
    borderBottomWidth: R.unit.scale(1),
  },
  svgView: {
    aspectRatio: 1,
    height: R.unit.scale(14),
  },
  applePayButton: {
    borderRadius: R.unit.scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: R.unit.scale(18),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: R.color.gray4,
    marginBottom: R.unit.scale(12),
  },
});

export default CompletePaymentModal;
