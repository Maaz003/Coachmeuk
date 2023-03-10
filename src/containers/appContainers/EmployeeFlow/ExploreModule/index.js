import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import Button from '@components/common/Button';
import HoverText from '@components/common/HoverText';
import SearchSuggestionsModal from '@components/view/modal/StudentModals/SearchSuggestionsModal';

function ExploreScreen(props) {
  const {navigation} = props;
  const [isModal, setIsModal] = useState(false);

  const openSearchSuggestionsModal = () => {
    setIsModal(!isModal);
  };

  return (
    <ScrollView
      style={[R.styles.container, styles.mainLayout]}
      vertical={false}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
      contentContainerStyle={styles.contentContainer}>
      <ImageBackground
        source={R.image.ExploreImage()}
        resizeMode={'cover'}
        style={styles.backgroundImageStyles}>
        <View style={styles.contentView}>
          <Text
            variant={'h2'}
            font={'Sequel551'}
            color={R.color.white}
            align={'left'}
            gutterBottom={16}
            transform={'none'}>
            Get powerful workouts with professional coaches
          </Text>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={openSearchSuggestionsModal}
            style={[R.styles.rowView, styles.searchBox]}>
            <Text
              variant={'body2'}
              font={'InterRegular'}
              color={R.color.gray}
              align={'left'}
              transform={'none'}>
              Sport type, technique, coach name...
            </Text>
          </TouchableOpacity>

          <Button
            value="Search"
            bgColor={R.color.mainColor}
            width={'100%'}
            size={'lg'}
            color={R.color.white}
            borderWidth={1}
            gutterBottom={32}
            borderColor={R.color.mainColor}
            onPress={() => navigation.navigate('SearchResults')}
          />
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <HoverText
              text={'Get a Match'}
              textColor={R.color.white}
              iconColor={R.color.white}
              onPress={() => {
                navigation.navigate('NoTabsStack', {
                  screen: 'SelectSports',
                });
              }}
            />
          </View>
        </View>
      </ImageBackground>
      <SearchSuggestionsModal isVisibleModal={isModal} />
    </ScrollView>
  );
}
export default ExploreScreen;
const styles = StyleSheet.create({
  mainLayout: {
    paddingHorizontal: 0,
    flex: 1,
  },
  contentView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: R.unit.scale(16),
    flexDirection: 'column',
  },
  backgroundImageStyles: {width: R.unit.width(1), flex: 1},
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  searchBox: {
    backgroundColor: R.color.white,
    borderRadius: R.unit.scale(10),
    justifyContent: 'flex-start',
    marginBottom: R.unit.scale(16),
    padding: R.unit.scale(16),
  },
});
