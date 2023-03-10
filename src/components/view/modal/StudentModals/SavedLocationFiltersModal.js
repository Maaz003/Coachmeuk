import React, {useEffect, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Text from '@components/common/Text';
import Button from '@components/common/Button';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';
import {TrashIcon} from '@components/utils/Svg';
import Divider from '@components/common/Divider';

function SavedLocationFiltersModal(props) {
  const {closeModalFromSecondary, savedFilters} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [alreadySavedFilters, setAlreadySavedFilters] = useState(savedFilters);
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    setModalVisible(!modalVisible);
    setAlreadySavedFilters(savedFilters);
  }, [props.isVisibleModal]);

  useEffect(() => {
    if (!isBlur) setModalVisible(false);
  }, [isBlur]);

  const addNewFilter = () => {
    setIsBlur(false);
    closeModalFromSecondary();
  };

  const deleteFilter = id => {
    const updatedArr = savedFilters?.filter(item => item.id !== id);
    setAlreadySavedFilters(updatedArr);
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
              <View style={styles.contentView}>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                  }}>
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
                      Saved Filters
                    </Text>
                  </View>
                </View>
                <ScrollView style={{height: R.unit.height(0.8)}}>
                  {alreadySavedFilters.map((item, index, arr) => {
                    return (
                      <View
                        style={{
                          paddingHorizontal: R.unit.scale(16),
                        }}>
                        <View style={[R.styles.rowView, styles.itemsRow]}>
                          <Text
                            variant={'body2'}
                            font={'InterRegular'}
                            color={R.color.black}
                            align={'center'}
                            transform={'none'}>
                            {item?.filterName}
                          </Text>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => deleteFilter(item?.id)}
                            style={styles.saveButton}>
                            <View style={R.styles.svgView}>
                              <TrashIcon />
                            </View>
                          </TouchableOpacity>
                        </View>
                        {index !== arr.length - 1 && (
                          <Divider lineStyles={{marginBottom: 0}} />
                        )}
                      </View>
                    );
                  })}
                </ScrollView>
              </View>

              <View style={styles.footer}>
                <Button
                  value={'Save new filter'}
                  bgColor={R.color.white}
                  width={'100%'}
                  size={'lg'}
                  color={R.color.black}
                  borderWidth={1}
                  borderColor={R.color.gray4}
                  onPress={addNewFilter}
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: R.color.white,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    padding: R.unit.scale(16),
    justifyContent: 'flex-start',
    borderBottomColor: R.color.gray4,
    borderBottomWidth: R.unit.scale(1),
  },
  contentView: {
    width: '100%',
    flex: 1,
  },
  cancelButton: {
    padding: R.unit.scale(5),
  },
  itemsRow: {
    paddingVertical: R.unit.scale(24),
  },
  footer: {
    width: '100%',
    padding: R.unit.scale(16),
  },
});

export default SavedLocationFiltersModal;
