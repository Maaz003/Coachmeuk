import React, {useEffect, useState} from 'react';
import {
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
import TextInput from '@components/common/TextInput';
import LocationSugestionsModal from './locationSuggestionsModal';

function SearchSuggestionsModal(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [text, setText] = useState('');
  const suggestionsArray = [
    {name: 'Tennis', coaches: '1283 coaches'},
    {name: 'Soccer', coaches: 'Coming soon'},
    {name: 'Baseball', coaches: 'Coming soon'},
    {name: 'Skating', coaches: 'Coming soon'},
    {name: 'Football', coaches: 'Coming soon'},
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

  return (
    <>
      <Modal
        animationType={'fades'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
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
                    style={{flex: 1, marginRight: 32}}
                    transform={'none'}>
                    Search
                  </Text>
                </View>
                <TextInput
                  secureText={false}
                  placeholder={'Sport type, technique, coach...'}
                  onChangeText={data => {
                    setText(data);
                  }}
                  color={R.color.black}
                  value={text}
                  gutterBottom={24}
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
                <ScrollView
                  contentContainerStyle={{
                    flexGrow: 1,
                  }}>
                  {suggestionsArray?.map(({name, coaches}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setOpenSecondModal(!openSecondModal);
                        }}
                        activeOpacity={0.6}
                        style={{
                          ...R.styles.rowView,
                          marginBottom: R.unit.scale(24),
                        }}>
                        <Text
                          variant={'body2'}
                          font={'InterSemiBold'}
                          color={R.color.black}
                          align={'center'}
                          transform={'none'}>
                          {name}
                        </Text>
                        <Text
                          variant={'body2'}
                          font={'InterRegular'}
                          color={R.color.gray}
                          align={'center'}
                          transform={'none'}>
                          {coaches}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </SafeAreaView>
          </>
        </View>
        <LocationSugestionsModal
          isVisibleModal={openSecondModal}
          closeModalFromSecondary={() => {
            setIsBlur(false);
          }}
        />
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

export default SearchSuggestionsModal;
