import React, {useEffect, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';

function ViewCertificateModal(props) {
  const {modalData} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    setModalVisible(!modalVisible);
  }, [props.isVisibleModal]);

  useEffect(() => {
    if (!isBlur) setModalVisible(false);
  }, [isBlur]);

  const openModal = () => {
    setIsBlur(true);
  };

  const closeModal = () => {
    setIsBlur(false);
  };

  return (
    <>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
        onShow={openModal}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            onPress={closeModal}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0,.8)',
            }}></TouchableOpacity>
          <>
            <SafeAreaView style={styles.modalView}>
              <View style={{width: '100%', alignItems: 'center'}}>
                <View style={styles.notch} />
              </View>

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

              <Text
                variant={'h4'}
                font={'Sequel551'}
                color={R.color.blackShade4}
                align={'left'}
                transform={'none'}>
                {modalData?.title}
              </Text>
              <Text
                variant={'body2'}
                font={'InterRegular'}
                color={R.color.blackShade4}
                align={'left'}
                gutterTop={8}
                transform={'none'}>
                Expiration date: {modalData?.expiry}
              </Text>
              <Image
                source={modalData?.image}
                style={styles.image}
                resizeMode={'cover'}
              />
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
    paddingHorizontal: R.unit.scale(16),
    paddingBottom: R.unit.scale(32),
    borderTopRightRadius: R.unit.scale(10),
    borderTopLeftRadius: R.unit.scale(10),
  },
  notch: {
    height: R.unit.scale(4),
    width: R.unit.scale(40),
    backgroundColor: R.color.gray5,
    borderRadius: R.unit.scale(10),
    marginTop: R.unit.scale(8),
  },
  header: {
    paddingVertical: R.unit.scale(20),
    justifyContent: 'flex-start',
    marginBottom: R.unit.scale(16),
  },
  cancelButton: {
    padding: R.unit.scale(5),
  },
  image: {
    width: '100%',
    height: R.unit.scale(300),
    marginTop: R.unit.scale(24),
    borderRadius: R.unit.scale(20),
  },
});

export default ViewCertificateModal;
