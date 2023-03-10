import React, {useEffect, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';
import Button from '@components/common/Button';
import TextInput from '@components/common/TextInput';

function NewPaymentModal(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [isInfoModal, setIsInfoModal] = useState(false);

  useEffect(() => {
    setModalVisible(!modalVisible);
  }, [props.isVisibleModal]);

  useEffect(() => {
    if (!isBlur) setModalVisible(false);
  }, [isBlur]);

  return (
    <>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        // visible={true}
        onRequestClose={() => setIsBlur(false)}
        onShow={() => {
          setIsBlur(true);
        }}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            onPress={() => setIsBlur(false)}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}></TouchableOpacity>
          <>
            <SafeAreaView style={styles.modalView}>
              <KeyboardAwareScrollView
                style={{width: '100%'}}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <View style={styles.notch} />
                  <View style={[R.styles.rowView, styles.header]}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() => {
                        setIsBlur(false);
                      }}>
                      <Icon
                        type={'Ionicons'}
                        name={'close'}
                        color={R.color.blackShade4}
                        size={20}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.contentView}>
                  <Text
                    variant={'h4'}
                    font={'Sequel651'}
                    color={R.color.blackShade4}
                    align={'left'}
                    gutterBottom={24}
                    numberOfLines={2}
                    style={{width: '100%'}}
                    transform={'none'}>
                    Add payment method
                  </Text>
                  <TextInput
                    secureText={false}
                    title={'card number'}
                    color={R.color.black}
                    gutterTop={24}
                    isRightTitle={false}
                    backgroundColor={'white'}
                  />
                  <View style={{...R.styles.rowView, width: '100%'}}>
                    <TextInput
                      secureText={false}
                      title={'Expiration date'}
                      color={R.color.black}
                      placeholder={'MM/YY'}
                      width={0.44}
                      gutterTop={24}
                      backgroundColor={'white'}
                    />
                    <TextInput
                      secureText={false}
                      title={'CVV'}
                      color={R.color.black}
                      placeholder={'Security CO...'}
                      maxLength={4}
                      width={0.44}
                      gutterTop={24}
                      isRightTitle={false}
                      backgroundColor={'white'}
                      isSubTitle={true}
                      subTitleIcon={
                        <Icon
                          type={'MaterialIcons'}
                          name={'info-outline'}
                          color={R.color.blackShade4}
                          size={15}
                        />
                      }
                    />
                  </View>
                </View>
                <View style={[R.styles.rowView, styles.footerButton]}>
                  <Button
                    value={'Cancel'}
                    bgColor={R.color.white}
                    width={'30%'}
                    size={'lg'}
                    variant={'body3'}
                    font={'InterMedium'}
                    color={R.color.blackShade4}
                    disabled={false}
                    loaderColor={R.color.white}
                    onPress={() => {
                      setIsBlur(false);
                    }}
                  />
                  <Button
                    value={'Add'}
                    bgColor={R.color.gray2}
                    width={'40%'}
                    size={'lg'}
                    variant={'body3'}
                    font={'InterMedium'}
                    color={R.color.black}
                    borderColor={R.color.mainColor}
                    disabled={false}
                    loaderColor={R.color.white}
                    btnWrapperStyles={{marginLeft: R.unit.scale(20)}}
                    onPress={() => {
                      setIsBlur(false);
                      setIsInfoModal(!isInfoModal);
                    }}
                  />
                </View>
              </KeyboardAwareScrollView>
            </SafeAreaView>
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
    alignItems: 'flex-end',
  },
  modalView: {
    backgroundColor: R.color.white,
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: R.unit.scale(10),
    borderTopLeftRadius: R.unit.scale(10),
    paddingBottom: R.unit.scale(Platform.OS === 'ios' ? 80 : 0),
  },
  notch: {
    backgroundColor: R.color.gray5,
    width: '15%',
    height: R.unit.scale(5),
    borderRadius: R.unit.scale(100),
    marginTop: R.unit.scale(8),
  },
  header: {
    paddingVertical: R.unit.scale(16),
    paddingHorizontal: R.unit.scale(10),
    width: '100%',
  },
  contentView: {
    width: '100%',
    paddingHorizontal: R.unit.scale(16),
    alignItems: 'center',
    flex: 1,
    marginTop: R.unit.scale(16),
  },

  footerButton: {
    borderTopColor: R.color.gray4,
    borderTopWidth: R.unit.scale(0.75),
    justifyContent: 'flex-end',
    width: '100%',
    padding: R.unit.scale(16),
    borderBottomColor: 'red',
    backgroundColor: R.color.white,
  },
});

export default NewPaymentModal;
