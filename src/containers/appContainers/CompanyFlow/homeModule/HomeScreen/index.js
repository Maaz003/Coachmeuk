import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScrollContainer from '@components/view/screens/ScrollContainer';
import ScreenBoiler from '@components/layout/header/ScreenBoiler';
import Carousel from '@components/common/Carousel';
import EventsCard from '@components/view/cards/EventsCard';
import Button from '@components/common/Button';
import UpcomingBirthdayCard from '@components/view/cards/UpcomingBirthdayCard';
import LeavesRequestCard from '@components/view/cards/LeavesRequestCard';
import EmptyListError from '@components/common/EmptyListError';
import {SearchErrorIcon} from '@components/utils/Svg';

function HomeScreen(props) {
  const headerProps = {isSubHeader: false};

  const [activeCard, setActiveCard] = useState(0);

  const tempArr = [
    {
      title: 'Event Name',
      date: '03/03/2023',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      title: 'Event Name 2 ',
      date: '03/03/2023',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      title: 'Event Name 3',
      date: '03/03/2023',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      title: 'Event Name 4',
      date: '03/03/2023',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
  ];

  const upcomingBirthdays = [
    {
      name: 'Maaz',
      designation: 'IT MANAGER',
    },
    {
      name: 'Maaz',
      designation: 'IT MANAGER',
    },
    {
      name: 'Maaz',
      designation: 'IT MANAGER',
    },
    {
      name: 'Maaz',
      designation: 'IT MANAGER',
    },
  ];

  const leaves = [
    {
      name: 'John Doe',
      reason: 'Sick',
      leaves: '08',
      startDate: '03/01/2023',
      endDate: '10/01/2023',
    },
    {
      name: 'John Doe',
      reason: 'Sick',
      leaves: '12',
      startDate: '03/01/2023',
      endDate: '10/01/2023',
    },
    {
      name: 'John Doe 2',
      reason: 'Sick',
      leaves: '16',
      startDate: '03/01/2023',
      endDate: '10/01/2023',
    },
    {
      name: 'John Doe',
      reason: 'Sick',
      leaves: '20',
      startDate: '03/01/2023',
      endDate: '10/01/2023',
    },
  ];

  const emptyListComponent = () => {
    return (
      <View style={{flex: 1}}>
        <EmptyListError
          icon={<SearchErrorIcon height="100%" width="100%" />}
          heading={'No leave requests'}
          text={'There are no new leave rquests available now'}
          isFooter={false}
        />
      </View>
    );
  };

  const keyExtractor = item => item.id;

  const _renderList = ({item, index}) => {
    return <LeavesRequestCard item={item} />;
  };

  return (
    <ScreenBoiler headerProps={headerProps}>
      <ScrollContainer
        linearColors={['#EEAA42', '#ED973C', '#EB5C2B']}
        paddingBottom={50}
        gradientHeight={0.57}>
        <View style={styles.contentView}>
          <Text
            variant={'body2'}
            font={'RalewayExtraBold'}
            color={R.color.blackShade4}
            gutterTop={0}
            align={'left'}
            transform={'none'}>
            Upcoming Events
          </Text>
          <Carousel
            data={tempArr}
            renderItem={<EventsCard activeItem={activeCard} />}
            pagingEnabled={true}
            activeCarouselItem={data => {
              console.log('DATA', data);
              setActiveCard(data);
            }}
          />
          <Text
            variant={'body2'}
            font={'RalewayExtraBold'}
            color={R.color.blackShade4}
            gutterTop={35}
            gutterBottom={10}
            align={'left'}
            transform={'none'}>
            Employees Birthdays
          </Text>

          <View
            style={{
              width: '100%',
              alignItems: 'center',
              flexWrap: 'wrap',
              flexDirection: 'row',
              rowGap: 10,
              columnGap: 10,
              paddingHorizontal: R.unit.scale(10),
            }}>
            {upcomingBirthdays?.map((item, index) => {
              return <UpcomingBirthdayCard />;
            })}
          </View>

          <Button
            value="View More"
            bgColor={R.color.mainColor}
            width={'40%'}
            size={'lg'}
            color={R.color.white}
            gutterTop={16}
            disabled={false}
            loaderColor={R.color.white}
            onPress={() => null}
          />
          <Text
            variant={'body2'}
            font={'RalewayExtraBold'}
            color={R.color.blackShade4}
            gutterTop={36}
            gutterBottom={10}
            align={'left'}
            transform={'none'}>
            Total Number Of Request
          </Text>

          <FlatList
            data={leaves}
            style={styles.flatListContainer}
            renderItem={_renderList}
            nestedScrollEnabled
            onEndReachedThreshold={0.001}
            removeClippedSubviews={true}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={emptyListComponent}
            contentContainerStyle={styles.flatListContentContainer}
          />
        </View>
      </ScrollContainer>
    </ScreenBoiler>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
    paddingHorizontal: 0,
    flex: 1,
  },
  contentView: {
    marginTop: R.unit.scale(32),
    paddingHorizontal: R.unit.scale(16),
    width: '100%',
    justifyContent: 'center',
  },
  flatListContainer: {
    paddingTop: R.unit.scale(24),
  },
  flatListContentContainer: {
    flexGrow: 1,
    rowGap: R.unit.scale(12),
    justifyContent: 'flex-start',
    paddingHorizontal: R.unit.scale(10),
    paddingBottom: R.unit.scale(10),
  },
});
