import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';
import {CheckIcon} from '@components/utils/Svg';
import Button from '@components/common/Button';

function BookingCongratsModal(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    setModalVisible(!modalVisible);
  }, [props.isVisibleModal]);

  useEffect(() => {
    if (!isBlur) setModalVisible(false);
  }, [isBlur]);

  const closeModal = () => {
    setIsBlur(false);
  };

  return (
    <>
      <Modal
        animationType={'fades'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
        onShow={() => setIsBlur(true)}>
        <View style={styles.centeredView}>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
            }}>
            <TouchableOpacity
              onPress={closeModal}
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)',
              }}></TouchableOpacity>
          </View>
          <>
            <View style={styles.modalView}>
              <View style={styles.notch} />
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
              </View>
              <View style={styles.svgView}>
                <CheckIcon height="100%" width="100%" />
              </View>
              <Text
                variant={'h4'}
                font={'Sequel651'}
                gutterTop={20}
                color={R.color.blackShade4}
                align={'center'}
                transform={'none'}>
                Booking requested
              </Text>

              <Text
                variant={'body3'}
                font={'InterRegular'}
                gutterTop={16}
                color={R.color.gray}
                align={'center'}
                transform={'none'}>
                We sent a booking request to your coach. If they accept, you
                will receive confirmation and calendar invite.
              </Text>
              <Button
                value={'Check booking status'}
                bgColor={R.color.mainColor}
                width={'100%'}
                size={'lg'}
                gutterTop={24}
                color={R.color.white}
                borderWidth={1}
                borderColor={R.color.mainColor}
                onPress={() => setIsBlur(false)}
              />
            </View>
          </>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: R.color.white,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: R.unit.scale(20),
    paddingBottom: R.unit.scale(32),
    borderTopRightRadius: R.unit.scale(10),
    borderTopLeftRadius: R.unit.scale(10),
  },
  notch: {
    marginTop: R.unit.scale(8),
    height: R.unit.scale(4),
    width: R.unit.scale(40),
    backgroundColor: R.color.gray5,
    borderRadius: R.unit.scale(12),
  },
  header: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingVertical: R.unit.scale(16),
  },
  cancelButton: {
    padding: R.unit.scale(5),
  },
  svgView: {
    height: R.unit.scale(48),
    aspectRatio: 1,
  },
});

export default BookingCongratsModal;
