import React, {useEffect, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';
import {CheckIcon, DeclinedIcon} from '@components/utils/Svg';
import Button from '@components/common/Button';

function LessonStatusModal(props) {
  const {
    isIcon = true,
    isPassed = true,
    title,
    text,
    primaryButtonText,
    secondaryButtonText,
    primaryButtonPress,
    secondaryButtonPress,
    isReport = false,
  } = props;

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    setModalVisible(!modalVisible);
  }, [props.isVisibleModal]);

  useEffect(() => {
    if (!isBlur) setModalVisible(false);
  }, [isBlur]);

  const onSubmit = () => {
    primaryButtonPress();
    if (isReport) {
      setIsBlur(false);
    }
  };

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

              <View
                style={{
                  ...styles.contentView,
                  marginTop: R.unit.scale(isIcon ? 0 : 16),
                }}>
                {isIcon && (
                  <View style={styles.svgView}>
                    {isPassed ? (
                      <CheckIcon height="100%" width="100%" />
                    ) : (
                      <DeclinedIcon height="110%" width="110%" />
                    )}
                  </View>
                )}

                <Text
                  variant={'h4'}
                  font={'Sequel651'}
                  color={R.color.blackShade4}
                  align={isIcon ? 'center' : 'left'}
                  gutterBottom={16}
                  numberOfLines={2}
                  style={{width: '100%'}}
                  transform={'none'}>
                  {title}
                </Text>
                <Text
                  variant={'body3'}
                  font={'InterRegular'}
                  color={R.color.gray}
                  align={isIcon ? 'center' : 'left'}
                  gutterBottom={24}
                  // numberOfLines={2}
                  style={{width: '100%'}}
                  transform={'none'}>
                  {text}
                </Text>
                {primaryButtonText && (
                  <Button
                    value={primaryButtonText}
                    bgColor={R.color.white}
                    width={'99%'}
                    size={'lg'}
                    variant={'body3'}
                    font={'InterMedium'}
                    color={R.color.black}
                    borderColor={R.color.gray4}
                    disabled={false}
                    gutterBottom={8}
                    loaderColor={R.color.white}
                    borderWidth={0.75}
                    onPress={onSubmit}
                  />
                )}
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
    alignItems: 'flex-end',
  },
  modalView: {
    backgroundColor: R.color.white,
    width: '100%',
    alignItems: 'center',
    borderTopRightRadius: R.unit.scale(10),
    borderTopLeftRadius: R.unit.scale(10),
    paddingBottom: R.unit.scale(Platform.OS === 'ios' ? 80 : 20),
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
  },
  svgView: {
    aspectRatio: 1,
    height: R.unit.scale(40),
    marginBottom: R.unit.scale(16),
  },
});

export default LessonStatusModal;
