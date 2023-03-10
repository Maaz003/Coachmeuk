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
import Divider from '@components/common/Divider';

function CancellationPolicyModal(props) {
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

  const cancelPolicyArray = [
    {title: '24h before lesson', refund: false},
    {title: 'Before Sep 20, 11:00am', refund: true},
    {title: 'If coach is no show up', refund: true},
  ];

  return (
    <>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setIsBlur(true)}
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
                  transform={'none'}>
                  Cancellation policy
                </Text>

                {cancelPolicyArray?.map((item, index, arr) => {
                  return (
                    <View key={index}>
                      <Divider lineStyles={styles.lineStyles} />

                      <View style={R.styles.rowView}>
                        <Text
                          variant={'body2'}
                          font={'InterRegular'}
                          color={R.color.blackShade4}
                          align={'left'}
                          transform={'none'}>
                          {item?.title}
                        </Text>
                        <Text
                          variant={'body2'}
                          font={'InterSemiBold'}
                          color={
                            !item?.refund
                              ? R.color.mainColor
                              : R.color.hyperLinkColor
                          }
                          align={'left'}
                          transform={'none'}>
                          {!item?.refund ? 'No refund' : 'Refund'}
                        </Text>
                      </View>
                      {index === arr.length - 1 && (
                        <Divider lineStyles={styles.lineStyles} />
                      )}
                    </View>
                  );
                })}

                <Text
                  variant={'body2'}
                  font={'InterRegular'}
                  color={R.color.blackShade5}
                  align={'left'}
                  gutterBottom={24}
                  transform={'none'}>
                  If you cancel a lesson more than three times 24 hours before
                  the start of the lesson, you may be banned.
                </Text>
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
    paddingBottom: R.unit.scale(80),
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
  lineStyles: {
    marginVertical: R.unit.scale(24),
  },
});

export default CancellationPolicyModal;
