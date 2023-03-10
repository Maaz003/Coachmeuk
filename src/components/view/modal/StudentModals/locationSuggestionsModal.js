import React, {useEffect, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '@components/common/Text';
import Button from '@components/common/Button';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';
import TextInput from '@components/common/TextInput';
import {DirectionIcon} from '@components/utils/Svg';

function LocationSugestionsModal(props) {
  const {closeModalFromSecondary} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    setModalVisible(!modalVisible);
  }, [props.isVisibleModal]);

  useEffect(() => {
    if (!isBlur) setModalVisible(false);
  }, [isBlur]);

  const addFilters = () => {
    setIsBlur(false);
    closeModalFromSecondary();
  };

  const clearFilters = () => {};

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
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
            }}></View>
          <>
            <SafeAreaView style={styles.modalView}>
              <View
                style={{width: '100%', paddingHorizontal: R.unit.scale(16)}}>
                <View style={[R.styles.rowView, styles.header]}>
                  <TouchableOpacity
                    style={styles.cancelButton}
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

                  <Text
                    variant={'body2'}
                    font={'InterSemiBold'}
                    color={R.color.blackShade4}
                    align={'center'}
                    style={{flex: 1, marginRight: 32}}
                    transform={'none'}>
                    Search
                  </Text>
                </View>

                <TextInput
                  secureText={false}
                  placeholder={'Location'}
                  onChangeText={data => {
                    setText(data);
                  }}
                  color={R.color.black}
                  value={text}
                  gutterBottom={24}
                  widthInPercentage={'100%'}
                  returnKeyType={'done'}
                  iconName={'search'}
                  iconType={'Fontisto'}
                  alignItems={'center'}
                  inputStyles={{
                    paddingVertical: R.unit.scale(12),
                  }}
                  leftIconStyles={{
                    color: R.color.gray7,
                    fontSize: R.unit.scale(16),
                  }}
                />
                <View style={R.styles.twoItemsRow}>
                  <View style={R.styles.svgView}>
                    <DirectionIcon height="100%" width="100%" />
                  </View>
                  <Text
                    variant={'body2'}
                    font={'InterSemiBold'}
                    color={R.color.blackShade4}
                    align={'left'}
                    style={{marginLeft: R.unit.scale(16)}}
                    transform={'none'}>
                    Use my current location
                  </Text>
                </View>
              </View>

              <View style={styles.footer}>
                <Button
                  value={'Skip'}
                  bgColor={R.color.white}
                  width={'40%'}
                  size={'lg'}
                  color={R.color.blackShade4}
                  btnWrapperStyles={{
                    justifyContent: 'flex-start',
                  }}
                  onPress={clearFilters}
                />
                <Button
                  value={'Search'}
                  bgColor={R.color.mainColor}
                  width={'40%'}
                  size={'lg'}
                  color={R.color.white}
                  borderWidth={1}
                  borderColor={R.color.mainColor}
                  onPress={addFilters}
                />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: R.color.white,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  header: {
    paddingVertical: R.unit.scale(16),
    justifyContent: 'flex-start',
  },
  cancelButton: {
    padding: R.unit.scale(5),
  },
  footer: {
    width: '100%',
    borderTopWidth: R.unit.scale(0.75),
    borderTopColor: R.color.gray4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: R.unit.scale(16),
  },
});

export default LocationSugestionsModal;
