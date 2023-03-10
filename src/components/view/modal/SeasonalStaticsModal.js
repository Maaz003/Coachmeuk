import React, {useEffect, useState, useRef} from 'react';
import {
  Modal,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {sportFilters} from '@components/constants';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';
import InsightsFilterModal from './InsightsFilterModal';
import {FilterIcon} from '@components/utils/Svg';

function SeasonalStaticsModal(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [page, setPage] = useState(0);
  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  const scrollRef = useRef();

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

  const onTabChange = item => {
    let index = item.index;
    setPage(index);
    setFilterType({...filterType, timeSlot: item.title});
    if (index % 2 === 0) {
      scrollRef.current.scrollTo({x: R.unit.width((index / 2) * 1) / 2});
    }
  };

  function* yLabel() {
    yield* ['0$', '100$', '200$', '300$', '400$'];
  }

  function* xLabel() {
    yield* ['<0.5k+', '0.5k+', '1k+', '1.5k+', '2.5k+', '3k+', '3.5k+'];
  }

  const yLabelIterator = yLabel();
  const xLabelIterator = xLabel();

  let labels = [];

  for (let i = 0; i < 7; i++) {
    let value = i * 0.5;
    labels.push(value);
  }

  return (
    <>
      <Modal
        animationType={'fades'}
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
            <SafeAreaView style={[styles.modalView]}>
              <ScrollView>
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

                  <View style={{flex: 1, marginRight: R.unit.scale(24)}}>
                    <Text
                      variant={'body2'}
                      font={'InterSemiBold'}
                      color={R.color.blackShade4}
                      align={'center'}
                      transform={'none'}>
                      Season statistic
                    </Text>
                  </View>
                </View>

                <View style={styles.contentView}>
                  <Text
                    variant={'body2'}
                    font={'InterRegular'}
                    color={R.color.gray}
                    align={'left'}
                    transform={'none'}>
                    The{' '}
                    <Text
                      variant={'body2'}
                      font={'InterSemiBold'}
                      color={R.color.blackShade4}
                      align={'left'}
                      transform={'none'}>
                      number of coaches{' '}
                    </Text>
                    is shown on the left side of the chart, and the bottom line
                    shows the profit for the current season as an indicator of
                    demand. 6k+ includes coaches with income $6000 and more.
                  </Text>
                  <View style={styles.controlRow}>
                    <TouchableOpacity
                      style={styles.modeButton}
                      activeOpacity={0.4}
                      onPress={() => setIsModal(!isModal)}>
                      <View style={{padding: R.unit.scale(5.5)}}>
                        <FilterIcon />
                      </View>
                    </TouchableOpacity>

                    <ScrollView
                      horizontal={true}
                      ref={scrollRef}
                      showsHorizontalScrollIndicator={false}
                      style={styles.horizontalScroll}
                      contentContainerStyle={styles.scrollContent}>
                      {sportFilters?.map((item, index) => {
                        return (
                          <View style={styles.tabItem} key={index}>
                            <TouchableOpacity
                              style={{
                                ...styles.tab,
                                backgroundColor:
                                  page === index
                                    ? R.color.blackShade4
                                    : R.color.gray6,
                              }}
                              activeOpacity={0.9}
                              onPress={() => onTabChange(item)}>
                              <Text
                                variant={'body3'}
                                font={'InterRegular'}
                                color={
                                  page === index
                                    ? R.color.white
                                    : R.color.blackShade4
                                }
                                align={'left'}
                                transform={'none'}>
                                {item.value}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        );
                      })}
                    </ScrollView>
                  </View>

                  <ScrollView horizontal></ScrollView>
                  <View style={[R.styles.rowView, styles.indicatorContainer]}>
                    <View style={R.styles.twoItemsRow}>
                      <View style={styles.redIndicator} />
                      <Text
                        variant={'body3'}
                        font={'InterRegular'}
                        color={R.color.gray}
                        align={'left'}
                        transform={'none'}>
                        Summer
                      </Text>
                    </View>

                    <View style={R.styles.twoItemsRow}>
                      <View style={styles.blueIndicator} />
                      <Text
                        variant={'body3'}
                        font={'InterRegular'}
                        color={R.color.gray}
                        align={'left'}
                        transform={'none'}>
                        Winter
                      </Text>
                    </View>

                    <View style={R.styles.twoItemsRow}>
                      <View style={styles.grayIndicator} />
                      <Text
                        variant={'body3'}
                        font={'InterRegular'}
                        color={R.color.gray}
                        align={'left'}
                        transform={'none'}>
                        Spring
                      </Text>
                    </View>

                    <View
                      style={{
                        ...R.styles.twoItemsRow,
                      }}>
                      <View style={styles.grayIndicator} />
                      <Text
                        variant={'body3'}
                        font={'InterRegular'}
                        color={R.color.gray}
                        align={'left'}
                        transform={'none'}>
                        Autumn
                      </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </SafeAreaView>
          </>
        </View>
        {Platform.OS === 'ios' && (
          <InsightsFilterModal isVisibleModal={isModal} isSeasonal={true} />
        )}
      </Modal>
      {Platform.OS === 'android' && (
        <InsightsFilterModal isVisibleModal={isModal} isSeasonal={true} />
      )}
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
    justifyContent: 'flex-start',
  },
  header: {
    paddingVertical: R.unit.scale(16),
    paddingHorizontal: R.unit.scale(20),
    borderBottomWidth: R.unit.scale(0.75),
    borderBottomColor: R.color.gray4,
    marginBottom: R.unit.scale(24),
  },
  contentView: {
    paddingHorizontal: R.unit.scale(16),
    marginBottom: R.unit.scale(24),
  },

  horizontalScroll: {
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  tab: {
    paddingHorizontal: R.unit.scale(16),
    paddingVertical: R.unit.scale(6),
    borderRadius: R.unit.scale(10),
    marginRight: R.unit.scale(8),
  },
  modeButton: {
    padding: R.unit.scale(5),
    backgroundColor: R.color.gray6,
    borderRadius: R.unit.scale(10),
    marginRight: R.unit.scale(8),
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: R.unit.scale(24),
  },
  indicatorContainer: {
    justifyContent: 'space-between',
    marginTop: R.unit.scale(26),
    marginBottom: R.unit.scale(36),
  },
  labelStyles: {
    fontFamily: 'Inter-Regular',
    fontSize: R.unit.scale(12),
    fill: R.color.gray,
  },
  redIndicator: {
    backgroundColor: R.color.mainColor,
    height: R.unit.scale(12),
    width: R.unit.scale(12),
    borderRadius: R.unit.scale(2),
    marginRight: R.unit.scale(12),
  },
  blueIndicator: {
    backgroundColor: R.color.hyperLinkColor,
    height: R.unit.scale(12),
    width: R.unit.scale(12),
    borderRadius: R.unit.scale(2),
    marginRight: R.unit.scale(12),
  },
  grayIndicator: {
    backgroundColor: R.color.gray4,
    height: R.unit.scale(12),
    width: R.unit.scale(12),
    borderRadius: R.unit.scale(2),
    marginRight: R.unit.scale(12),
  },
  grayIndicator: {
    backgroundColor: R.color.gray4,
    height: R.unit.scale(12),
    width: R.unit.scale(12),
    borderRadius: R.unit.scale(2),
    marginRight: R.unit.scale(12),
  },
});

export default SeasonalStaticsModal;
