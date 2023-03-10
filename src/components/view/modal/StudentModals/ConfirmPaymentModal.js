import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  Modal,
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
import {
  CalendarReqIcon,
  ClockReqIcon,
  EditPencilIcon,
  LocationReqIcon,
} from '@components/utils/Svg';
import PaymentProvidedModal from './PaymentProvidedModal';
import RadioButtonLine from '@components/common/RadioButtonLine';
import TextInput from '@components/common/TextInput';
import CompletePaymentModal from './CompletePaymentModal';

function ConfirmPaymentModal(props) {
  const scrollRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [isProvidedModal, setIsProvidedModal] = useState(false);
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [activeBookingType, setActiveBookingType] = useState(0);
  const [authUser, setAuthUser] = useState({
    fullName: 'Jay Baumgardner',
    phoneNumber: '+16102458015',
    dateOfBirth: '27/07/1984',
    notes: '',
  });
  const [errorField, setErrorField] = useState({
    fullName: '',
    phoneNumber: '',
    dateOfBirth: '',
  });

  const bookingTypes = [
    {
      title: 'I’m booking it for myself',
      isChecked: false,
      index: 0,
    },
    {
      title: 'I’m booking it for someone else',
      isChecked: false,
      index: 1,
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
    setIsProvidedModal(!isProvidedModal);
  };

  const openPaymentModal = () => {
    setIsPaymentModal(!isPaymentModal);
  };

  const selectBookingType = data => {
    scrollRef?.current?.scrollTo({
      x: 0,
      y: R.unit.height(data === 0 ? 0.4 : 0.8),
    });
    setActiveBookingType(data);
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
            ref={scrollRef}
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}>
            <View style={R.styles.twoItemsRow}>
              <Image
                source={R.image.BaseBallSport()}
                style={styles.image}
                resizeMode={'cover'}
              />

              <View style={styles.nameView}>
                <Text
                  variant={'body1'}
                  font={'Sequel651'}
                  color={R.color.black}
                  align={'left'}
                  numberOfLines={2}
                  gutterBottom={8}
                  transform={'none'}>
                  Michael Baumgardner
                </Text>
                <View
                  style={{
                    ...R.styles.twoItemsRow,
                    flexWrap: 'wrap',
                  }}>
                  <Icon
                    name={'star'}
                    type={'Foundation'}
                    color={R.color.mainColor}
                    size={25}
                  />
                  <Text
                    variant={'body3'}
                    font={'InterRegular'}
                    color={R.color.blackShade4}
                    align={'left'}
                    style={{marginLeft: R.unit.scale(4)}}
                    transform={'none'}>
                    5.0
                  </Text>
                  <Text
                    variant={'body3'}
                    font={'InterRegular'}
                    color={R.color.gray}
                    align={'left'}
                    style={{
                      marginLeft: R.unit.scale(2),
                      textDecorationLine: 'underline',
                    }}
                    transform={'none'}>
                    (7 reviews)
                  </Text>

                  <View
                    style={{
                      ...R.styles.dot,
                      marginHorizontal: R.unit.scale(8),
                    }}
                  />

                  <Text
                    variant={'body3'}
                    font={'InterSemiBold'}
                    color={R.color.blackShade4}
                    align={'left'}
                    numberOfLines={1}
                    transform={'none'}>
                    Tennis coach
                  </Text>
                </View>
              </View>
            </View>

            <View style={[R.styles.rowView, styles.lessonHeadingView]}>
              <Text
                variant={'body1'}
                font={'Sequel551'}
                color={R.color.black}
                align={'left'}
                lineHeight={25}
                transform={'none'}>
                Lesson details
              </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.editIcon}>
                  <EditPencilIcon height={'100%'} width={'100%'} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={R.styles.twoItemsRow}>
              <View style={styles.svgView}>
                <CalendarReqIcon height="100%" width="100%" />
              </View>
              <Text
                variant={'body3'}
                font={'InterRegular'}
                color={R.color.blackShade4}
                align={'left'}
                style={{marginLeft: R.unit.scale(8)}}
                transform={'none'}>
                24 Oct 2021
              </Text>
            </View>

            <View style={[R.styles.twoItemsRow, styles.detailView]}>
              <View style={styles.svgView}>
                <ClockReqIcon height="100%" width="100%" />
              </View>
              <Text
                variant={'body3'}
                font={'InterRegular'}
                color={R.color.blackShade4}
                align={'left'}
                style={{marginLeft: R.unit.scale(8)}}
                transform={'none'}>
                11:00AM- 12:00PM
              </Text>
            </View>

            <View style={[R.styles.twoItemsRow, styles.detailView]}>
              <View style={styles.svgView}>
                <LocationReqIcon height="100%" width="100%" />
              </View>
              <Text
                variant={'body3'}
                font={'InterRegular'}
                color={R.color.blackShade4}
                align={'left'}
                style={{marginLeft: R.unit.scale(8)}}
                transform={'none'}>
                San Diego
              </Text>
            </View>
            <Text
              variant={'body1'}
              font={'Sequel551'}
              color={R.color.blackShade4}
              align={'left'}
              gutterTop={48}
              transform={'none'}>
              What’s provided
            </Text>
            <Text
              variant={'body3'}
              font={'InterRegular'}
              color={R.color.blackShade4}
              align={'left'}
              transform={'none'}>
              There are things you should have when coming to a lesson. See
              what’s prvovided by your coach and be sure to bring everything
              else.{' '}
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
              variant={'body1'}
              font={'Sequel551'}
              color={R.color.blackShade4}
              align={'left'}
              gutterTop={48}
              transform={'none'}>
              Who are you booking the lesson for?
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
            {activeBookingType === 1 && (
              <View style={{marginTop: R.unit.scale(24)}}>
                <TextInput
                  secureText={false}
                  title={'Full Name'}
                  onChangeText={text => {
                    setAuthUser({...authUser, fullName: text});
                  }}
                  color={R.color.black}
                  value={authUser?.fullName}
                  gutterBottom={24}
                  isRightTitle={false}
                  formError={errorField?.fullName}
                  formErrorText={errorField?.fullName}
                  backgroundColor={'white'}
                />

                <TextInput
                  secureText={false}
                  title={'Date of Birth'}
                  onChangeText={text => {
                    setAuthUser({...authUser, dateOfBirth: text});
                  }}
                  color={R.color.black}
                  value={authUser?.dateOfBirth}
                  gutterBottom={24}
                  isRightTitle={false}
                  formError={errorField?.dateOfBirth}
                  formErrorText={errorField?.dateOfBirth}
                  backgroundColor={'white'}
                />

                <TextInput
                  secureText={false}
                  title={'Phone number'}
                  onChangeText={text => {
                    setAuthUser({...authUser, phoneNumber: text});
                  }}
                  color={R.color.black}
                  value={authUser?.phoneNumber}
                  isRightTitle={false}
                  formError={errorField?.phoneNumber}
                  formErrorText={errorField?.phoneNumber}
                  backgroundColor={'white'}
                />
              </View>
            )}
            <TextInput
              multiline={true}
              isSubTitle={true}
              subTitle={'(optional)'}
              onChangeText={text => {
                setAuthUser({...authUser, notes: text});
              }}
              placeholder={'Greet your coach. What do you want to accomplish?'}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              title={'Add notes'}
              returnKeyType={'done'}
              widthInPercentage={'100%'}
              value={authUser?.notes}
              gutterTop={24}
              backgroundColor={'white'}
              numberOfLines={60}
              height={100}
            />
            <Button
              value={'Proceed with payment'}
              bgColor={R.color.white}
              width={'100%'}
              size={'lg'}
              gutterTop={32}
              color={R.color.black}
              borderWidth={1}
              borderColor={R.color.gray4}
              onPress={openPaymentModal}
            />
          </ScrollView>
        </SafeAreaView>
        <PaymentProvidedModal isVisibleModal={isProvidedModal} />
        <CompletePaymentModal isVisibleModal={isPaymentModal} />
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
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: R.unit.scale(16),
    paddingBottom: R.unit.scale(50),
  },
  scrollContainer: {
    paddingTop: R.unit.scale(24),
  },
  header: {
    padding: R.unit.scale(16),
    borderBottomColor: R.color.gray4,
    borderBottomWidth: R.unit.scale(1),
  },
  nameView: {
    marginLeft: R.unit.scale(16),
    flex: 1,
  },
  lessonHeadingView: {
    marginTop: R.unit.scale(40),
    marginBottom: R.unit.scale(16),
  },
  detailView: {
    marginTop: R.unit.scale(12),
  },
  svgView: {
    aspectRatio: 1,
    height: R.unit.scale(17),
  },
  image: {
    borderRadius: R.unit.scale(10),
    height: R.unit.scale(90),
  },
  editIcon: {
    height: R.unit.scale(15),
    aspectRatio: 1,
  },
});

export default ConfirmPaymentModal;
