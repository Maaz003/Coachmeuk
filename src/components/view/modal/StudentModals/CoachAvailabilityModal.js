import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';
import Button from '@components/common/Button';
import DropDown from '@components/common/DropDown';
import Divider from '@components/common/Divider';
import {coachScheduleTimes, locations} from '@components/constants';
import ConfirmPaymentModal from './ConfirmPaymentModal';

function CoachAvailabilityModal(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [count, setCount] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [activeSeeMore, setActiveSeeMore] = useState([]);
  const [dataTime, setDataTime] = useState(coachScheduleTimes);
  const [filters, setFilters] = useState({
    location: '',
  });

  useEffect(() => {
    setModalVisible(!modalVisible);
  }, [props.isVisibleModal]);

  useEffect(() => {
    if (!isBlur) setModalVisible(false);
  }, [isBlur]);

  const closeModal = () => {
    setIsBlur(false);
  };

  const bookLesson = () => {
    setIsModal(!isModal);
  };

  const nextStep = () => {
    if (count < dataTime.length - 1) {
      setCount(count + 1);
    }
  };

  const prevStep = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const selectSlot = (...args) => {
    const [mainLevelId, nestedLevelId, subNestedLevelId] = args;
    const tempArr = JSON.parse(JSON.stringify(dataTime));
    console.log(subNestedLevelId, 'ssssssssss');
    let mainObject = tempArr.find(item => item?.id === mainLevelId);
    const nestedObject = mainObject?.dates?.find(
      item => item?.id === nestedLevelId,
    );
    let isStatus = nestedObject?.slots.find(
      ({id}) => id === subNestedLevelId,
    ).isChecked;
    nestedObject.slots.find(({id}) => id === subNestedLevelId).isChecked =
      !isStatus;
    setDataTime([...tempArr]);
  };

  return (
    <>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        // visible={true}
        onRequestClose={closeModal}
        onShow={() => {
          setIsBlur(true);
        }}>
        <SafeAreaView style={styles.modalView}>
          <View>
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
                style={{flex: 1, marginRight: R.unit.scale(30)}}
                transform={'none'}>
                Full Availability
              </Text>
            </View>

            <ScrollView
              style={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainerStyle}>
              <View style={R.styles.twoItemsRow}>
                <Image source={R.image.BaseBallSport()} style={styles.image} />

                <View style={styles.nameView}>
                  <Text
                    variant={'body1'}
                    font={'Sequel651'}
                    color={R.color.black}
                    align={'left'}
                    numberOfLines={2}
                    gutterBottom={8}
                    transform={'none'}>
                    Michael Baumgardner
                  </Text>
                  <View
                    style={[
                      R.styles.twoItemsRow,
                      {
                        flexWrap: 'wrap',
                      },
                    ]}>
                    <Icon
                      name={'star'}
                      type={'Foundation'}
                      color={R.color.mainColor}
                      size={25}
                    />
                    <Text
                      variant={'body3'}
                      font={'InterRegular'}
                      color={R.color.blackShade4}
                      align={'left'}
                      style={{marginLeft: R.unit.scale(4)}}
                      transform={'none'}>
                      5.0
                    </Text>
                    <Text
                      variant={'body3'}
                      font={'InterRegular'}
                      color={R.color.gray}
                      align={'left'}
                      style={{
                        marginLeft: R.unit.scale(2),
                        textDecorationLine: 'underline',
                      }}
                      transform={'none'}>
                      (7 reviews)
                    </Text>

                    <View
                      style={{
                        ...R.styles.dot,
                        marginHorizontal: R.unit.scale(8),
                      }}
                    />

                    <Text
                      variant={'body3'}
                      font={'InterSemiBold'}
                      color={R.color.blackShade4}
                      align={'left'}
                      numberOfLines={1}
                      transform={'none'}>
                      Tennis coach
                    </Text>
                  </View>
                </View>
              </View>

              <DropDown
                zIndex={2000}
                zIndexInverse={1000}
                zIndexIOS={2000}
                gutterTop={24}
                gutterBottom={24}
                placeholder={'Select Location'}
                title={'Choose location'}
                arrayData={locations}
                defaultValue={filters.location}
                loaderParentCall={data => {
                  setFilters({...filters, location: data?.value});
                }}
                value={filters.location}
              />
              {[dataTime[count]]?.map((mainItem, mainIndex) => {
                return (
                  <View key={mainIndex}>
                    <View style={R.styles.rowView}>
                      <Text
                        variant={'body2'}
                        font={'InterSemiBold'}
                        color={R.color.black}
                        align={'left'}
                        numberOfLines={2}
                        lineHeight={30}
                        transform={'none'}>
                        {mainItem?.range}
                      </Text>
                      <View style={R.styles.twoItemsRow}>
                        <TouchableOpacity
                          activeOpacity={0.7}
                          disabled={count === 0}
                          onPress={prevStep}>
                          <Icon
                            name={'keyboard-arrow-left'}
                            type={'MaterialIcons'}
                            size={20}
                            color={count === 0 ? R.color.gray4 : R.color.black}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          activeOpacity={0.7}
                          disabled={!count < dataTime.length - 1}
                          onPress={nextStep}>
                          <Icon
                            name={'keyboard-arrow-right'}
                            type={'MaterialIcons'}
                            size={20}
                            color={
                              count < dataTime.length - 1
                                ? R.color.black
                                : R.color.gray4
                            }
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Divider lineStyles={styles.dividerStyles} />

                    {mainItem?.dates?.map((nestedItem, nestedIndex) => {
                      let itemsToShow = [];
                      let endData = activeSeeMore?.includes(nestedItem?.id)
                        ? nestedItem?.slots?.length
                        : 7;
                      if (nestedItem?.slots?.length > endData) {
                        itemsToShow = nestedItem?.slots.slice(0, endData);
                      } else {
                        itemsToShow = [...nestedItem?.slots];
                      }

                      return (
                        <View
                          key={nestedIndex}
                          style={{
                            marginBottom: R.unit.scale(
                              nestedItem?.slots?.length === 0 ? 24 : 24,
                            ),
                          }}>
                          <View
                            style={{
                              ...R.styles.rowView,
                              marginBottom: R.unit.scale(
                                nestedItem?.slots?.length === 0 ? 0 : 16,
                              ),
                            }}>
                            <Text
                              variant={'body2'}
                              font={'InterSemiBold'}
                              color={R.color.black}
                              align={'left'}
                              lineHeight={30}
                              transform={'none'}>
                              {nestedItem?.date}
                            </Text>
                            {nestedItem?.slots?.length === 0 && (
                              <Text
                                variant={'body2'}
                                font={'InterRegular'}
                                color={R.color.gray}
                                align={'left'}
                                lineHeight={30}
                                transform={'none'}>
                                No Availability
                              </Text>
                            )}
                          </View>
                          {nestedItem?.slots?.length !== 0 && (
                            <View style={styles.timeSection}>
                              {itemsToShow?.map(
                                (subNestedItem, subNestedIndex) => {
                                  return (
                                    <TouchableOpacity
                                      key={subNestedIndex}
                                      onPress={() => {
                                        selectSlot(
                                          mainItem?.id,
                                          nestedItem?.id,
                                          subNestedItem?.id,
                                        );
                                      }}
                                      activeOpacity={0.8}
                                      style={{
                                        ...styles.timeBox,
                                        backgroundColor:
                                          subNestedItem?.isChecked
                                            ? R.color.black
                                            : R.color.white,
                                      }}>
                                      <Text
                                        variant={'body3'}
                                        font={'InterRegular'}
                                        color={
                                          subNestedItem?.isChecked
                                            ? R.color.white
                                            : R.color.black
                                        }
                                        align={'center'}
                                        transform={'none'}>
                                        {subNestedItem?.time}
                                      </Text>
                                    </TouchableOpacity>
                                  );
                                },
                              )}
                              {nestedItem?.slots?.length >= 8 && (
                                <TouchableOpacity
                                  onPress={() => {
                                    if (
                                      activeSeeMore?.includes(nestedItem.id)
                                    ) {
                                      const tempArr = activeSeeMore?.filter(
                                        item => item !== nestedItem?.id,
                                      );
                                      setActiveSeeMore(tempArr);
                                    } else {
                                      const tempArr = [...activeSeeMore];
                                      tempArr.push(nestedItem?.id);
                                      setActiveSeeMore(tempArr);
                                    }
                                  }}
                                  activeOpacity={0.8}
                                  style={styles.seeMoreBox}>
                                  <Text
                                    variant={'body3'}
                                    font={'InterRegular'}
                                    color={R.color.black}
                                    align={'center'}
                                    transform={'none'}>
                                    {activeSeeMore?.includes(nestedItem?.id)
                                      ? 'See Less'
                                      : 'See More'}
                                  </Text>
                                </TouchableOpacity>
                              )}
                            </View>
                          )}
                        </View>
                      );
                    })}
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.footer}>
            <Button
              value={'Cancel'}
              bgColor={R.color.white}
              width={'40%'}
              size={'lg'}
              color={R.color.blackShade4}
              btnWrapperStyles={{
                justifyContent: 'flex-start',
              }}
              // onPress={clearFilters}
            />
            <Button
              value={'Next'}
              bgColor={R.color.mainColor}
              width={'40%'}
              size={'lg'}
              color={R.color.white}
              borderWidth={1}
              borderColor={R.color.mainColor}
              onPress={bookLesson}
            />
          </View>
        </SafeAreaView>
        <ConfirmPaymentModal
          isVisibleModal={isModal}
          closeSecondaryModal={() => setIsBlur(false)}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: R.color.white,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    maxHeight: R.unit.height(Platform.OS === 'ios' ? 0.72 : 0.79),
    paddingTop: R.unit.scale(24),
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: R.unit.scale(16),
    paddingBottom: R.unit.scale(30),
  },
  header: {
    padding: R.unit.scale(16),
    borderBottomColor: R.color.gray4,
    borderBottomWidth: R.unit.scale(1),
  },
  cancelButton: {
    padding: R.unit.scale(5),
  },
  image: {
    borderRadius: R.unit.scale(10),
    height: R.unit.scale(90),
  },
  nameView: {
    marginLeft: R.unit.scale(16),
    flex: 1,
  },
  dividerStyles: {
    marginVertical: R.unit.scale(24),
  },
  timeSection: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  timeBox: {
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: R.unit.scale(10),
    height: R.unit.scale(44),
    borderWidth: R.unit.scale(1),
    borderRadius: R.unit.scale(10),
    borderColor: R.color.gray4,
    backgroundColor: R.color.white,
    paddingHorizontal: R.unit.scale(2),
    marginBottom: R.unit.scale(10),
  },
  seeMoreBox: {
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: R.unit.scale(1),
    borderRadius: R.unit.scale(10),
    borderColor: R.color.gray4,
    backgroundColor: R.color.white,
    paddingHorizontal: R.unit.scale(5),
    height: R.unit.scale(44),
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

export default CoachAvailabilityModal;
