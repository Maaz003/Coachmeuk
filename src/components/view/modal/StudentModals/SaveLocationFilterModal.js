import React, {useEffect, useState} from 'react';
import {
  Modal,
  Platform,
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
import SavedLocationFiltersModal from './SavedLocationFiltersModal';
import uuid from 'react-native-uuid';

function SaveLocationFilterModal(props) {
  const {closeModalFromSecondary, filters} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [text, setText] = useState('');
  const [errorField, setErrorField] = useState({filterName: ''});
  const [isModal, setIsModal] = useState(false);
  const [savedFilters, setSavedFilters] = useState([]);

  useEffect(() => {
    setModalVisible(!modalVisible);
  }, [props.isVisibleModal]);

  useEffect(() => {
    if (!isBlur) setModalVisible(false);
  }, [isBlur]);

  const saveFilters = () => {
    if (!!text) {
      setIsModal(!isModal);

      const tempArr = [...savedFilters];
      tempArr.push({
        id: uuid.v4(),
        filterName: text,
        filters: filters,
      });
      setSavedFilters(tempArr);
      setText('');
      // setIsBlur(false);
      // closeModalFromSecondary();
      setErrorField({filterName: ''});
    } else {
      setErrorField({filterName: 'Please fill the field'});
    }
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
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}></View>
          <>
            <SafeAreaView style={styles.modalView}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                }}>
                <View style={styles.notch} />
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
                    Save Filter
                  </Text>
                </View>

                <TextInput
                  secureText={false}
                  placeholder={'Filter Name'}
                  onChangeText={data => {
                    setText(data);
                  }}
                  color={R.color.black}
                  value={text}
                  gutterBottom={24}
                  widthInPercentage={'100%'}
                  returnKeyType={'done'}
                  alignItems={'center'}
                  formError={errorField?.filterName}
                  formErrorText={errorField?.filterName}
                  inputStyles={{
                    paddingVertical: R.unit.scale(
                      Platform.OS === 'ios' ? 0 : 12,
                    ),
                  }}
                  containerStyles={{
                    paddingHorizontal: R.unit.scale(16),
                  }}
                />
              </View>

              <View style={styles.footer}>
                <Button
                  value={'Save'}
                  bgColor={R.color.mainColor}
                  width={'100%'}
                  size={'lg'}
                  color={R.color.white}
                  borderWidth={1}
                  borderColor={R.color.mainColor}
                  onPress={saveFilters}
                />
              </View>
            </SafeAreaView>
          </>
        </View>
        <SavedLocationFiltersModal
          isVisibleModal={isModal}
          savedFilters={savedFilters}
          closeModalFromSecondary={() => setIsBlur(false)}
        />
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
    height: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    padding: R.unit.scale(16),
    justifyContent: 'flex-start',
    marginBottom: R.unit.scale(40),
    borderBottomColor: R.color.gray4,
    borderBottomWidth: R.unit.scale(1),
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

export default SaveLocationFilterModal;
