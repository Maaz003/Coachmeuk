import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import {FilterIcon, SearchErrorIcon} from '@components/utils/Svg';
import {searchedCoaches} from '@components/constants';
import ScreenBoiler from '@components/layout/header/ScreenBoiler';
import ToDoErrorDisplay from '@components/view/screens/ToDo/ToDoErrorDisplay';
import Icon from '@components/common/Icon';
import TextInput from '@components/common/TextInput';
import SearchLocationFilterModal from '@components/view/modal/StudentModals/SearchLocationFilterModal';

function SearchOnMapScreen(props) {
  const {navigation} = props;

  const mapRef = useRef(null);
  const isFocused = useIsFocused();

  const [filteredArray, setFilteredArray] = useState(searchedCoaches);
  const [showSearchFilter, setShowSearchFilter] = useState(false);
  const [text, setText] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarVisible: false,
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarVisible: true,
      });
  }, [navigation, isFocused]);

  const headerProps = {
    isHeader: false,
    isBothButtons: true,
    isSubHeader: false,
  };

  const openFilters = () => {
    setIsModal(!isModal);
  };

  const handleOnScroll = event => {
    let activeIndex = Math.round(
      event.nativeEvent.contentOffset.x / R.unit.width(0.92),
    );
    setActiveItem(activeIndex);
  };

  return (
    <ScreenBoiler headerProps={headerProps}>
      <View style={[R.styles.container, styles.mainLayout]}>
        <View style={styles.contentContainer}>
          <View style={styles.mapHeader}>
            {!showSearchFilter ? (
              <View style={R.styles.rowView}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{padding: R.unit.scale(5)}}>
                  <Icon
                    type={'MaterialIcons'}
                    name={'keyboard-arrow-left'}
                    color={R.color.black}
                    size={20}
                  />
                </TouchableOpacity>
                <Text
                  variant={'body2'}
                  font={'InterSemiBold'}
                  color={R.color.black}
                  align={'center'}
                  style={{
                    flex: 1,
                    marginRight: R.unit.scale(15),
                  }}
                  transform={'none'}>
                  Search on map
                </Text>

                <TouchableOpacity
                  onPress={() => setShowSearchFilter(!showSearchFilter)}>
                  <Icon
                    name={'search'}
                    type={'Fontinsto'}
                    color={R.color.black}
                    size={16}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={R.styles.rowView}>
                <TouchableOpacity
                  onPress={() => setShowSearchFilter(!showSearchFilter)}
                  style={{padding: R.unit.scale(5)}}>
                  <Icon
                    type={'Ionicons'}
                    name={'close'}
                    color={R.color.black}
                    size={20}
                  />
                </TouchableOpacity>
                <Text
                  variant={'body2'}
                  font={'InterSemiBold'}
                  color={R.color.black}
                  align={'center'}
                  style={{
                    flex: 1,
                    marginRight: R.unit.scale(32),
                  }}
                  transform={'none'}>
                  Edit your search
                </Text>
              </View>
            )}

            {showSearchFilter && (
              <View
                style={{
                  ...R.styles.rowView,
                  justifyContent: 'center',
                }}>
                <TextInput
                  secureText={false}
                  placeholder={'Search'}
                  onChangeText={data => setText(data)}
                  color={R.color.black}
                  value={text}
                  returnKeyType={'done'}
                  iconName={'search'}
                  iconType={'Fontisto'}
                  gutterTop={16}
                  alignItems={'center'}
                  iconColor={R.color.blackShade4}
                  iconRightName={'search'}
                  iconLeftType={'Fontisto'}
                  customIcon={
                    <View style={{padding: R.unit.scale(5)}}>
                      <FilterIcon />
                    </View>
                  }
                  iconPress={openFilters}
                />
              </View>
            )}
          </View>
          <View
            style={{
              flex: 1,
              width: R.unit.width(1),
            }}></View>

          <View
            style={{
              zIndex: 999,
              position: 'absolute',
              bottom: 20,
            }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              onScroll={e => handleOnScroll(e)}
              scrollEventThrottle={16}
              horizontal={true}>
              {filteredArray?.length === 0 ? (
                <View style={{flex: 1}}>
                  <ToDoErrorDisplay
                    icon={<SearchErrorIcon height="100%" width="100%" />}
                    heading={'No results'}
                    text={
                      'Try adjusting your search filters to see available coaches'
                    }
                    isFooter={false}
                    isButton={true}
                    buttonText={'Clear Filter'}
                    onPress={() => console.log('EWEW')}
                  />
                </View>
              ) : (
                <>
                  {filteredArray?.map(item => {
                    return (
                      <TouchableOpacity
                        style={styles.coachCard}
                        activeOpacity={0.9}
                        onPress={() => {
                          navigation.navigate('CoachDetails');
                        }}>
                        <View style={R.styles.twoItemsRow}>
                          <Image
                            source={R.image.BaseBallSport()}
                            resizeMode={'cover'}
                            style={styles.image}
                          />
                          <View style={{marginLeft: R.unit.scale(20)}}>
                            <Text
                              variant={'body1'}
                              font={'Sequel551'}
                              color={R.color.black}
                              align={'left'}
                              numberOfLines={2}
                              style={{maxWidth: '97%'}}
                              transform={'none'}>
                              {item.name}{' '}
                            </Text>

                            <View style={R.styles.twoItemsRow}>
                              <Icon
                                name={'star'}
                                type={'Foundation'}
                                color={R.color.mainColor}
                                size={16}
                              />
                              <Text
                                variant={'body3'}
                                font={'InterSemiBold'}
                                color={R.color.blackShade4}
                                align={'left'}
                                style={{marginLeft: R.unit.scale(4)}}
                                transform={'none'}>
                                {item.rating}
                              </Text>
                              <View style={styles.dot} />
                              <Text
                                variant={'body3'}
                                font={'Sequel551'}
                                color={R.color.blackShade4}
                                align={'left'}
                                transform={'none'}>
                                ${item.rate}/hr
                              </Text>
                            </View>

                            <View
                              style={{
                                ...R.styles.twoItemsRow,
                                marginTop: R.unit.scale(12),
                              }}>
                              <Text
                                variant={'body3'}
                                font={'InterSemiBold'}
                                color={R.color.gray}
                                align={'left'}
                                transform={'none'}>
                                0.6 mi away
                              </Text>
                              <View style={styles.dot} />
                              <Text
                                variant={'body3'}
                                font={'Sequel551'}
                                color={R.color.gray}
                                align={'left'}
                                transform={'none'}>
                                Tennis
                              </Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </>
              )}
            </ScrollView>
          </View>
        </View>
      </View>
      <SearchLocationFilterModal isVisibleModal={isModal} />
    </ScreenBoiler>
  );
}
export default SearchOnMapScreen;
const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.lightGray,
    paddingHorizontal: 0,
    flex: 1,
  },
  mapHeader: {
    backgroundColor: R.color.white,
    paddingHorizontal: R.unit.scale(14),
    paddingVertical: R.unit.scale(16),
    width: '100%',
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  svgView: {
    aspectRatio: 1,
    height: R.unit.scale(17),
  },
  popupSvg: {
    aspectRatio: 1,
    height: R.unit.scale(30),
  },
  coachCard: {
    backgroundColor: R.color.white,
    marginHorizontal: R.unit.scale(8),
    width: R.unit.width(0.9),
    borderRadius: R.unit.scale(10),
    padding: R.unit.scale(8),
  },
  image: {
    width: R.unit.width(0.2),
    height: R.unit.scale(100),
    borderRadius: R.unit.scale(8),
  },
  detailView: {
    marginTop: R.unit.scale(16),
  },
  dot: {
    height: R.unit.scale(4),
    width: R.unit.scale(4),
    backgroundColor: R.color.gray,
    borderRadius: R.unit.scale(30),
    marginHorizontal: R.unit.scale(8),
  },
  talkBubble: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  talkBubbleSquare: {
    width: 32,
    height: 32,
    backgroundColor: R.color.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  talkBubbleTriangle: {
    width: 10,
    height: 0,
    backgroundColor: R.color.brown,
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: R.color.red,
    borderRightColor: R.color.red,
    transform: [{rotate: '180deg'}],
  },
});
