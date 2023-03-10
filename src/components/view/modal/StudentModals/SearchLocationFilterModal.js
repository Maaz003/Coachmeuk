import React, {useEffect, useState} from 'react';
import {
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';
import {SaveFilterIcon} from '@components/utils/Svg';
import Button from '@components/common/Button';
import CheckBoxLine from '@components/common/CheckBoxLine';
import uuid from 'react-native-uuid';
import Divider from '@components/common/Divider';
import SaveLocationFilterModal from './SaveLocationFilterModal';
import SavedLocationFiltersModal from './SavedLocationFiltersModal';
import RadioButtonLine from '@components/common/RadioButtonLine';

function SearchLocationFilterModal(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [saveFilterLocationModal, setSaveLocationFilterModal] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [focusTagsArray, setFocusTagsArray] = useState([
    {
      text: 'Backhand',
      id: uuid.v4(),
      selected: false,
      sportName: 'Tennis',
      totalNo: 376,
    },
    {
      text: 'Forehand',
      id: uuid.v4(),
      selected: false,
      sportName: 'Tennis',
      totalNo: 14,
    },
    {
      text: 'Top spin',
      id: uuid.v4(),
      selected: false,
      sportName: 'Tennis',
      totalNo: 383,
    },
    {
      text: 'Serve',
      id: uuid.v4(),
      selected: false,
      sportName: 'Tennis',
      totalNo: 617,
    },
  ]);

  const [ageRangeArray, setAgeRangeArray] = useState([
    {
      text: 'Kids',
      id: uuid.v4(),
      selected: false,
      totalNo: 12,
    },
    {
      text: 'Juniors',
      id: uuid.v4(),
      selected: false,
      totalNo: 72,
    },
    {
      text: 'Adults',
      id: uuid.v4(),
      selected: false,
      totalNo: 46,
    },
    {
      text: 'Seniors',
      id: uuid.v4(),
      selected: false,
      totalNo: 12,
    },
  ]);

  const [skillLevelArray, setSkillLevelArray] = useState([
    {
      totalNo: '12',
      id: uuid.v4(),
      selected: false,
      text: 'Beginner',
    },
    {
      totalNo: '72',
      id: uuid.v4(),
      selected: false,
      text: 'Intermediate',
    },
    {
      totalNo: '46',
      id: uuid.v4(),
      selected: false,
      text: 'Competitive',
    },
    {
      totalNo: '34',
      id: uuid.v4(),
      selected: false,
      text: 'Advanced ',
    },
  ]);

  const [dayOfWeekArray, setDayOfWeekArray] = useState([
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ]);

  const [filters, setFilters] = useState({
    focusTags: [],
    timeOfDay: '',
    dayOfWeek: [],
    skillLevel: [],
    gender: '',
    ageRange: [],
  });

  const genderArray = [
    {
      text: 'Any',
      id: uuid.v4(),
      selected: false,
      totalNo: 4760,
    },
    {
      text: 'Female',
      id: uuid.v4(),
      selected: false,
      totalNo: 1938,
    },
    {
      text: 'Male',
      id: uuid.v4(),
      selected: false,
      totalNo: 1839,
    },
    {
      text: 'Other',
      id: uuid.v4(),
      selected: false,
      totalNo: 938,
    },
  ];

  const timeOfDayArray = [
    {
      time: '6-9 am',
      id: uuid.v4(),
      selected: false,
      timeOfDay: 'Morning',
      image: R.image.Morning(),
    },
    {
      time: '9-12 am',
      id: uuid.v4(),
      selected: false,
      timeOfDay: 'Late Morning',
      image: R.image.Morning01(),
    },
    {
      time: '12-3 pm',
      id: uuid.v4(),
      selected: false,
      timeOfDay: 'Afternoon',
      image: R.image.Afternoon(),
    },
    {
      time: '3-6 pm',
      id: uuid.v4(),
      selected: false,
      timeOfDay: 'Late Afternoon',
      image: R.image.Afternoon(),
    },
    {
      time: '6-9 pm',
      id: uuid.v4(),
      selected: false,
      timeOfDay: 'Evening',
      image: R.image.Evening(),
    },
    {
      time: '9-12 pm',
      id: uuid.v4(),
      selected: false,
      timeOfDay: 'Late Evening',
      image: R.image.LateEvening(),
    },
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

  const openSaveModal = () => {
    setIsModal(!isModal);
  };

  const selectFilter = (id, value, key, arr) => {
    let alreadyPresent = filters[key].find(item => item === value);
    let updatedArray = [];
    if (!!alreadyPresent) {
      updatedArray = filters[key].filter(item => item !== value);
    } else {
      updatedArray = [...filters[key], value];
    }
    setFilters({...filters, [key]: updatedArray});
    const selectedItem = arr.find(item => item.id === id).selected;
    arr.find(item => item.id === id).selected = !selectedItem;
    if (key === 'focusTags') {
      setFocusTagsArray(arr);
    } else if (key === 'skillLevel') {
      setSkillLevelArray(arr);
    } else if (key === 'ageRange') {
      setAgeRangeArray(arr);
    }
  };

  const applyFilter = () => {
    setSaveLocationFilterModal(!saveFilterLocationModal);
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
                transform={'none'}>
                Filters
              </Text>
              <TouchableOpacity
                style={styles.cancelButton}
                activeOpacity={0.6}
                onPress={openSaveModal}>
                <SaveFilterIcon />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainerStyle}>
              <Text
                variant={'body2'}
                font={'InterSemiBold'}
                color={R.color.blackShade4}
                align={'left'}
                style={styles.horizontalPadding}
                transform={'none'}>
                Focus tags
              </Text>
              <View style={styles.tagsListSection}>
                {focusTagsArray?.map((item, _, arr) => {
                  return (
                    <View
                      style={{
                        ...R.styles.rowView,
                        marginBottom: R.unit.scale(16),
                      }}>
                      <View
                        style={{
                          ...R.styles.twoItemsRow,
                          flex: 0.7,
                        }}>
                        <CheckBoxLine
                          onPress={() =>
                            selectFilter(item?.id, item?.text, 'focusTags', arr)
                          }
                          selected={item?.selected}
                          text={item.text}
                          textColor={
                            item?.selected ? R.color.black : R.color.gray
                          }
                          textContainerStyles={{flex: 0}}
                          containerStyles={{
                            marginTop: 0,
                          }}
                        />
                        <Text
                          variant={'body6'}
                          font={'InterRegular'}
                          color={R.color.gray}
                          align={'left'}
                          style={styles.focusTagsNumberText}
                          transform={'none'}>
                          {item?.totalNo}
                        </Text>
                      </View>
                      <Text
                        variant={'body3'}
                        font={'InterSemiBold'}
                        color={R.color.gray}
                        align={'left'}
                        transform={'none'}>
                        {item?.sportName}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <Divider lineStyles={styles.lineStyles} />
              <Text
                variant={'body2'}
                font={'InterSemiBold'}
                color={R.color.blackShade4}
                align={'left'}
                style={styles.horizontalPadding}
                transform={'none'}>
                Price Range
              </Text>
              <Divider lineStyles={styles.lineStyles} />
              <Text
                variant={'body2'}
                font={'InterSemiBold'}
                color={R.color.blackShade4}
                align={'left'}
                style={styles.horizontalPadding}
                transform={'none'}>
                Distance
              </Text>
              <Divider lineStyles={styles.lineStyles} />
              <Text
                variant={'body2'}
                font={'InterSemiBold'}
                color={R.color.blackShade4}
                align={'left'}
                style={styles.horizontalPadding}
                transform={'none'}>
                Schedule
              </Text>
              <Text
                variant={'body4'}
                font={'InterSemiBold'}
                color={R.color.gray}
                gutterTop={16}
                align={'left'}
                style={styles.horizontalPadding}
                transform={'none'}>
                Time of the day
              </Text>
              <View style={styles.scheduleTimeSection}>
                {timeOfDayArray?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setFilters({...filters, timeOfDay: item?.time});
                      }}
                      activeOpacity={0.8}
                      style={{
                        ...styles.scheduleTimeBox,
                        ...(index % 3 !== 0 && {
                          borderLeftWidth: R.unit.scale(1),
                          borderLeftColor: R.color.gray2,
                        }),
                        ...(index <= 2 && {
                          borderBottomWidth: R.unit.scale(1),
                          borderBottomColor: R.color.gray2,
                        }),
                      }}>
                      <Image
                        style={{
                          tintColor:
                            item?.time === filters?.timeOfDay
                              ? R.color.hyperLinkColor
                              : R.color.black,
                        }}
                        source={item?.image}
                      />

                      <Text
                        variant={'body3'}
                        font={'InterSemiBold'}
                        color={
                          item?.time === filters?.timeOfDay
                            ? R.color.hyperLinkColor
                            : R.color.black
                        }
                        align={'center'}
                        gutterTop={10}
                        transform={'none'}>
                        {item?.time}
                      </Text>
                      <Text
                        variant={'body5'}
                        font={'InterRegular'}
                        color={R.color.gray}
                        align={'center'}
                        transform={'none'}>
                        {item?.timeOfDay}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <Text
                variant={'body4'}
                font={'InterSemiBold'}
                color={R.color.gray}
                gutterTop={24}
                align={'left'}
                style={styles.horizontalPadding}
                transform={'none'}>
                Days of the week
              </Text>
              <View style={styles.daysSection}>
                {dayOfWeekArray?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setFilters({...filters, dayOfWeek: item});
                      }}
                      activeOpacity={0.8}
                      style={{
                        ...styles.dayBox,
                        borderColor:
                          item === filters?.dayOfWeek
                            ? R.color.black
                            : R.color.gray4,
                        backgroundColor:
                          item === filters?.dayOfWeek
                            ? R.color.black
                            : R.color.white,

                        ...(index <= 3 && {
                          marginBottom: R.unit.scale(10),
                        }),
                      }}>
                      <Text
                        variant={'body3'}
                        font={'InterSemiBold'}
                        color={
                          item === filters?.dayOfWeek
                            ? R.color.white
                            : R.color.black
                        }
                        align={'center'}
                        transform={'none'}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <Divider lineStyles={styles.lineStyles} />

              <Text
                variant={'body2'}
                font={'InterSemiBold'}
                color={R.color.blackShade4}
                align={'left'}
                gutterBottom={24}
                style={styles.horizontalPadding}
                transform={'none'}>
                Gender
              </Text>

              {genderArray?.map(item => {
                return (
                  <View style={[R.styles.twoItemsRow, styles.genderSection]}>
                    <RadioButtonLine
                      selected={item?.text === filters?.gender}
                      onPress={() =>
                        setFilters({...filters, gender: item?.text})
                      }
                      textColor={
                        item?.text === filters?.gender
                          ? R.color.black
                          : R.color.gray
                      }
                      text={item?.text}
                    />
                  </View>
                );
              })}

              <Divider lineStyles={styles.lineStyles} />

              <Text
                variant={'body2'}
                font={'InterSemiBold'}
                color={R.color.blackShade4}
                align={'left'}
                gutterBottom={24}
                style={styles.horizontalPadding}
                transform={'none'}>
                Skill level
              </Text>

              {skillLevelArray?.map((item, _, arr) => {
                return (
                  <View style={[R.styles.twoItemsRow, styles.genderSection]}>
                    <CheckBoxLine
                      onPress={() =>
                        selectFilter(item?.id, item?.text, 'skillLevel', arr)
                      }
                      selected={item?.selected}
                      text={item.text}
                      textColor={item?.selected ? R.color.black : R.color.gray}
                      textContainerStyles={{flex: 0}}
                      containerStyles={{
                        marginTop: 0,
                      }}
                    />
                    <Text
                      variant={'body3'}
                      font={'InterRegular'}
                      color={item?.selected ? R.color.black : R.color.gray}
                      align={'left'}
                      style={{marginLeft: R.unit.scale(2)}}
                      transform={'none'}>
                      ({item?.totalNo})
                    </Text>
                  </View>
                );
              })}
              <Divider lineStyles={styles.lineStyles} />

              <Text
                variant={'body2'}
                font={'InterSemiBold'}
                color={R.color.blackShade4}
                align={'left'}
                gutterBottom={24}
                style={styles.horizontalPadding}
                transform={'none'}>
                Age range
              </Text>

              {ageRangeArray?.map((item, _, arr) => {
                return (
                  <View style={[R.styles.twoItemsRow, styles.genderSection]}>
                    <CheckBoxLine
                      onPress={() =>
                        selectFilter(item?.id, item?.text, 'ageRange', arr)
                      }
                      selected={item?.selected}
                      text={item.text}
                      textColor={item?.selected ? R.color.black : R.color.gray}
                      textContainerStyles={{flex: 0}}
                      containerStyles={{
                        marginTop: 0,
                      }}
                    />
                    <Text
                      variant={'body3'}
                      font={'InterRegular'}
                      color={item?.selected ? R.color.black : R.color.gray}
                      align={'left'}
                      style={{marginLeft: R.unit.scale(2)}}
                      transform={'none'}>
                      ({item?.totalNo})
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.footer}>
            <Button
              value={'Clear all'}
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
              value={'Apply '}
              bgColor={R.color.mainColor}
              width={'40%'}
              size={'lg'}
              color={R.color.white}
              borderWidth={1}
              borderColor={R.color.mainColor}
              onPress={applyFilter}
            />
          </View>
        </SafeAreaView>

        <SaveLocationFilterModal
          isVisibleModal={saveFilterLocationModal}
          filters={filters}
          closeModalFromSecondary={() => {
            setIsBlur(false);
          }}
        />
        <SavedLocationFiltersModal
          isVisibleModal={isModal}
          savedFilters={[]}
          closeModalFromSecondary={() => setIsBlur(false)}
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
  header: {
    padding: R.unit.scale(16),
    borderBottomColor: R.color.gray4,
    borderBottomWidth: R.unit.scale(1),
  },
  scrollContainer: {
    maxHeight: R.unit.height(Platform.OS === 'ios' ? 0.72 : 0.79),
    paddingTop: R.unit.scale(24),
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: R.unit.scale(30),
  },
  cancelButton: {
    padding: R.unit.scale(5),
  },
  horizontalPadding: {
    paddingHorizontal: R.unit.scale(16),
  },
  tagsListSection: {
    marginTop: R.unit.scale(24),
    width: '100%',
    paddingHorizontal: R.unit.scale(16),
  },
  focusTagsNumberText: {
    backgroundColor: R.color.gray6,
    paddingVertical: R.unit.scale(2),
    borderRadius: R.unit.scale(10),
    marginLeft: R.unit.scale(2),
    paddingHorizontal: R.unit.scale(5),
    overflow: 'hidden',
  },
  scheduleTimeSection: {
    width: '100%',
    marginTop: R.unit.scale(16),
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: R.unit.scale(16),
    justifyContent: 'center',
  },
  scheduleTimeBox: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: R.unit.scale(20),
    paddingVertical: R.unit.scale(16),
  },
  daysSection: {
    width: '100%',
    marginTop: R.unit.scale(16),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingHorizontal: R.unit.scale(16),
  },
  dayBox: {
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: R.unit.scale(10),
    paddingHorizontal: R.unit.scale(20),
    paddingVertical: R.unit.scale(12),
    borderWidth: R.unit.scale(1),
    borderRadius: R.unit.scale(10),
  },
  genderSection: {
    paddingHorizontal: R.unit.scale(16),
    marginBottom: R.unit.scale(16),
  },
  lineStyles: {
    marginVertical: R.unit.scale(24),
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

export default SearchLocationFilterModal;
