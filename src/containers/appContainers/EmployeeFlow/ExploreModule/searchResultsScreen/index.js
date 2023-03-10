import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import TextInput from '@components/common/TextInput';
import {
  FilterIcon,
  LocationReqIcon,
  SearchErrorIcon,
} from '@components/utils/Svg';
import {searchedCoaches} from '@components/constants';
import Divider from '@components/common/Divider';
import ScreenBoiler from '@components/layout/header/ScreenBoiler';
import ToDoErrorDisplay from '@components/view/screens/ToDo/ToDoErrorDisplay';
import Icon from '@components/common/Icon';

function SearchResultsScreen(props) {
  const {navigation} = props;
  const [text, setText] = useState(false);
  const [filteredArray, setFilteredArray] = useState(searchedCoaches);
  const [isModal, setIsModal] = useState(false);

  const onChange = value => {
    setText(value);
    if (value.length > 1) {
      let updatedArr = filteredArray?.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
      if (updatedArr.length > 0) {
        setFilteredArray(updatedArr);
      } else {
        setFilteredArray([]);
      }
    } else {
      setFilteredArray(searchedCoaches);
    }
  };

  const openFilters = () => {
    setIsModal(!isModal);
  };

  const headerProps = {
    isHeader: false,
    isBothButtons: true,
    isSubHeader: false,
  };

  return (
    <ScreenBoiler headerProps={headerProps}>
      <View style={[R.styles.container, styles.mainLayout]}>
        <View style={styles.contentContainer}>
          <TextInput
            secureText={false}
            placeholder={'Search'}
            onChangeText={onChange}
            color={R.color.black}
            value={text}
            returnKeyType={'done'}
            iconName={'search'}
            iconType={'Fontisto'}
            gutterBottom={24}
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: R.unit.scale(Platform.OS === 'ios' ? 100 : 20),
            }}>
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
                {filteredArray?.map((item, index, arr) => {
                  return (
                    <TouchableOpacity
                      style={styles.coachCardLayout}
                      activeOpacity={0.7}
                      onPress={() => {
                        navigation.navigate('CoachDetails');
                      }}>
                      <View style={R.styles.twoItemsRow}>
                        <Image
                          source={R.image.BaseBallSport()}
                          resizeMode={'contain'}
                          style={styles.image}
                        />
                        <View style={{flex: 1, marginLeft: R.unit.scale(20)}}>
                          <Text
                            variant={'body1'}
                            font={'Sequel551'}
                            color={R.color.black}
                            align={'left'}
                            numberOfLines={3}
                            transform={'none'}>
                            {item.name}{' '}
                          </Text>

                          <View style={[R.styles.twoItemsRow]}>
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
                        </View>
                      </View>

                      <Text
                        variant={'body3'}
                        font={'InterRegular'}
                        color={R.color.gray}
                        numberOfLines={3}
                        align={'left'}
                        gutterTop={16}
                        transform={'none'}>
                        {item.message}
                      </Text>

                      <View style={[R.styles.twoItemsRow, styles.detailView]}>
                        <View style={styles.svgView}>
                          <LocationReqIcon height="100%" width="100%" />
                        </View>
                        <Text
                          variant={'body3'}
                          font={'InterRegular'}
                          color={R.color.blackShade4}
                          align={'left'}
                          style={{marginLeft: R.unit.scale(4)}}
                          transform={'none'}>
                          {item.away} m away
                        </Text>
                        <View style={styles.dot} />
                        <Text
                          variant={'body3'}
                          font={'InterRegular'}
                          color={R.color.blackShade4}
                          align={'left'}
                          transform={'none'}>
                          {item.sportName}
                        </Text>
                      </View>

                      {index !== arr.length - 1 && (
                        <Divider
                          lineStyles={{
                            marginVertical: 24,
                          }}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </>
            )}
          </ScrollView>
        </View>

        <TouchableOpacity
          style={styles.searchMapLayout}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('SearchOnMap')}>
          <Icon
            name={'map-outline'}
            type={'Ionicons'}
            color={R.color.white}
            size={16}
          />
          <Text
            variant={'body3'}
            font={'InterMedium'}
            color={R.color.white}
            numberOfLines={3}
            style={{marginLeft: R.unit.scale(12)}}
            align={'left'}
            transform={'none'}>
            Search on Map
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenBoiler>
  );
}
export default SearchResultsScreen;
const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
    paddingHorizontal: 0,
    flex: 1,
    marginTop: R.unit.scale(24),
  },
  contentContainer: {
    paddingHorizontal: R.unit.scale(16),
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  svgView: {
    aspectRatio: 1,
    height: R.unit.scale(17),
  },
  popupSvg: {
    aspectRatio: 1,
    height: R.unit.scale(30),
  },
  coachCardLayout: {
    backgroundColor: R.color.white,
  },
  image: {
    width: R.unit.scale(64),
    height: R.unit.scale(88),
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
  searchMapLayout: {
    position: 'absolute',
    zIndex: 999,
    backgroundColor: R.color.black,
    top: R.unit.height(1 - (Platform.OS === 'ios' ? 0.3 : 0.2)),
    alignSelf: 'center',
    borderRadius: R.unit.scale(10),
    paddingHorizontal: R.unit.scale(24),
    paddingVertical: R.unit.scale(15),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
