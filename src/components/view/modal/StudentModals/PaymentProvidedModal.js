import React, {useEffect, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';
import {provided} from '@components/constants';

function PaymentProvidedModal(props) {
  const {closeModalFromSecondary} = props;
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
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        // visible={true}
        // onRequestClose={() => setIsBlur(false)}
        onShow={() => {
          setIsBlur(true);
        }}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            onPress={closeModal}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}></TouchableOpacity>
          <>
            <SafeAreaView style={styles.modalView}>
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
              <View style={styles.contentView}>
                <Text
                  variant={'h4'}
                  font={'Sequel551'}
                  color={R.color.black}
                  align={'left'}
                  gutterBottom={20}
                  transform={'none'}>
                  What's provided
                </Text>
                {provided?.map((item, index) => {
                  return (
                    <View style={[R.styles.twoItemsRow, styles.items]}>
                      <Icon
                        type={'MaterialIcons'}
                        name={'check'}
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

                <Text
                  variant={'body1'}
                  font={'Sequel551'}
                  color={R.color.blackShade4}
                  align={'left'}
                  gutterTop={24}
                  gutterBottom={12}
                  transform={'none'}>
                  What to bring
                </Text>

                <Text
                  variant={'body2'}
                  font={'InterRegular'}
                  color={R.color.blackShade5}
                  align={'left'}
                  gutterBottom={24}
                  transform={'none'}>
                  Things that the coach does not provide should be taken by
                  yourself.
                </Text>
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
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: R.color.white,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopRightRadius: R.unit.scale(10),
    borderTopLeftRadius: R.unit.scale(10),
    paddingHorizontal: R.unit.scale(16),
  },
  notch: {
    height: R.unit.scale(4),
    width: R.unit.scale(40),
    backgroundColor: R.color.gray5,
    borderRadius: R.unit.scale(10),
    marginTop: R.unit.scale(8),
  },
  header: {
    paddingVertical: R.unit.scale(16),
    justifyContent: 'flex-start',
    width: '100%',
  },
  contentView: {
    marginTop: R.unit.scale(16),
    width: '100%',
    paddingBottom: R.unit.scale(20),
  },
  items: {
    width: '50%',
    paddingBottom: R.unit.scale(16),
  },
});

export default PaymentProvidedModal;
