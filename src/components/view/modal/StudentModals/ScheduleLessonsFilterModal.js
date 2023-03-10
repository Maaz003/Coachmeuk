import React, {useEffect, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {locations} from '@components/constants';
import Text from '@components/common/Text';
import Button from '@components/common/Button';
import R from '@components/utils/R';
import uuid from 'react-native-uuid';
import Icon from '@components/common/Icon';
import DropDown from '@components/common/DropDown';

function ScheduleLessonsFilterModal(props) {
  const {statusFlag} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [location, setLocation] = useState('All');
  const [status, setStatus] = useState('All');
  const [filters, setFilters] = useState([]);

  const [filterType, setFilterType] = useState({
    location: '',
    season: '',
    timeSlot: '',
    sport: '',
  });

  useEffect(() => {
    setModalVisible(!modalVisible);
  }, [props.isVisibleModal]);

  useEffect(() => {
    if (!isBlur) setModalVisible(false);
  }, [isBlur]);

  const openSavedModal = () => {
    // setIsModal(!isModal);
  };

  const applyFilter = () => {
    setIsBlur(false);
  };

  const clearFilters = () => {
    setLocation('All');
    setStatus('All');
    setIsBlur(false);
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
        <SafeAreaView style={[styles.modalView]}>
          <View>
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
                  size={25}
                />
              </TouchableOpacity>

              <Text
                variant={'body2'}
                font={'InterSemiBold'}
                color={R.color.blackShade4}
                align={'center'}
                transform={'none'}>
                Filters
              </Text>

              <TouchableOpacity
                style={styles.cancelButton}
                activeOpacity={0.6}
                onPress={openSavedModal}>
                <Icon
                  type={'MaterialCommunityIcons'}
                  name={'bookmark-outline'}
                  color={R.color.blackShade4}
                  size={25}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.dropDownView}>
              <DropDown
                zIndex={2000}
                zIndexInverse={1000}
                zIndexIOS={2000}
                title={'Choose location'}
                arrayData={locations}
                defaultValue={location}
                loaderParentCall={data => {
                  setFilterType({...filterType, location: data.value});
                }}
                value={location}
                gutterBottom={16}
              />
              <DropDown
                zIndex={1000}
                zIndexInverse={2000}
                zIndexIOS={1000}
                title={'Lesson type'}
                arrayData={locations}
                defaultValue={location}
                loaderParentCall={data => {
                  setFilterType({...filterType, location: data.value});
                }}
                value={location}
                gutterBottom={16}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <Button
              value={'Clear All'}
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
              value={'Apply'}
              bgColor={R.color.mainColor}
              width={'40%'}
              size={'lg'}
              color={R.color.white}
              borderWidth={1}
              borderColor={R.color.gray4}
              onPress={applyFilter}
            />
          </View>
        </SafeAreaView>
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
    paddingHorizontal: R.unit.scale(20),
    borderBottomWidth: R.unit.scale(0.75),
    borderBottomColor: R.color.gray4,
    marginBottom: R.unit.scale(24),
  },
  dropDownView: {
    paddingHorizontal: R.unit.scale(16),
    marginBottom: R.unit.scale(24),
  },

  horizontalScroll: {
    width: '100%',
    marginTop: R.unit.scale(16),
  },
  scrollContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  tabItem: {
    display: 'flex',
    marginRight: R.unit.scale(8),
    paddingBottom: R.unit.scale(5),
  },
  tab: {
    width: '100%',
    height: R.unit.scale(36),
    paddingHorizontal: R.unit.scale(16),
    paddingVertical: R.unit.scale(8),
    borderRadius: R.unit.scale(10),
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

export default ScheduleLessonsFilterModal;
