import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import R from '@components/utils/R';
import TextInput from '@components/common/TextInput';
import {useSelector} from 'react-redux';
import {
  FilterIcon,
  LessonRequestErrorIcon,
  PaymentErrorIcon,
} from '@components/utils/Svg';
import {studentScheduledData} from '@components/constants';
import ScreenBoiler from '@components/layout/header/ScreenBoiler';
import ToDoErrorDisplay from '@components/view/screens/ToDo/ToDoErrorDisplay';
import HorizontalFilterTab from '@components/common/HorizontalFilterTab';
import StudentScheduleLessonCard from '@components/view/cards/StudentScheduleLessonCard';
import Icon from '@components/common/Icon';
import StudentScheduleEvaluationCard from '@components/view/cards/StudentScheduleEvaluationCard';
import StudentScheduleTransactionCard from '@components/view/cards/StudentScheduleTransactionCard';
import ScheduleLessonsFilterModal from '@components/view/modal/StudentModals/ScheduleLessonsFilterModal';
import Button from '@components/common/Button';

function ScheduledLessonsScreen(props) {
  const {navigation} = props;
  const scrollRef = useRef();
  const common = useSelector(state => state.common);
  const [text, setText] = useState(false);
  const [filteredArray, setFilteredArray] = useState(studentScheduledData);
  const [activeTab, setActiveTab] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const tabs = [
    {title: 'My Lessons', index: 0},
    {title: 'Performance evaluation', index: 1},
    {title: 'Transaction history', index: 2},
  ];

  const onChange = value => {
    setText(value);
    let findValue = activeTab === 2 ? 'last4' : 'title';
    if (value.length > 1) {
      let updatedArr = filteredArray?.filter(item => {
        return item[findValue].toLowerCase().includes(value.toLowerCase());
      });
      if (updatedArr.length > 0) {
        setFilteredArray(updatedArr);
      } else {
        setFilteredArray([]);
      }
    } else {
      let tempArr = [];
      if (activeTab === 0) {
        tempArr = studentScheduledData.filter(
          item => item.category === 'mylessons',
        );
        setFilteredArray(tempArr);
      } else if (activeTab === 1) {
        tempArr = studentScheduledData.filter(
          item => item.category === 'evaluation',
        );
        setFilteredArray(tempArr);
      } else {
        tempArr = studentScheduledData.filter(
          item => item.category === 'transaction',
        );
        setFilteredArray(tempArr);
      }
      setFilteredArray(tempArr);
    }
  };

  const openFilters = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    if (activeTab === 0) {
      const tempArr = studentScheduledData.filter(
        item => item.category === 'mylessons',
      );
      setFilteredArray(tempArr);
    } else if (activeTab === 1) {
      const tempArr = studentScheduledData.filter(
        item => item.category === 'evaluation',
      );
      setFilteredArray(tempArr);
    } else {
      const tempArr = studentScheduledData.filter(
        item => item.category === 'transaction',
      );
      setFilteredArray(tempArr);
    }
  }, [activeTab]);

  const headerProps = {
    isHeader: false,
    isBothButtons: true,
    isSubHeader: false,
  };

  const onTabChange = selectedIndex => {
    scrollRef.current.scrollTo({x: R.unit.width(selectedIndex * 0.2)});
    setActiveTab(selectedIndex);
  };

  const emptyListComponent = () => {
    const title =
      activeTab === 2 ? (
        <PaymentErrorIcon height="100%" width="100%" />
      ) : (
        <LessonRequestErrorIcon height="100%" width="100%" />
      );
    const heading =
      activeTab === 0
        ? 'You haven’t booked a lesson yet'
        : activeTab === 1
        ? 'You have no performance evaluation'
        : 'You do not have any upcoming payouts';
    const text =
      activeTab === 0
        ? 'You haven’t booked any lessons yet. But as soon as you do they’ll appear here.'
        : activeTab === 1
        ? 'You haven’t booked any lessons yet. But as soon as you do they’ll appear here.'
        : 'Once a student has booked a lesson with you, transaction information will appear here.';
    return (
      <View style={{flex: 1}}>
        <ToDoErrorDisplay
          icon={title}
          heading={heading}
          text={text}
          isFooter={false}
          isButton={false}
          buttonText={'Clear Filter'}
          onPress={() => console.log('EWEW')}
        />
        <Button
          value={'Look for a coach'}
          bgColor={R.color.mainColor}
          width={'100%'}
          size={'lg'}
          color={R.color.white}
          onPress={() => null}
        />
      </View>
    );
  };

  const keyExtractor = item => item.id;

  const _renderList = ({item, index}) => {
    return (
      <>
        {activeTab === 0 ? (
          <StudentScheduleLessonCard
            item={item}
            index={index}
            arr={filteredArray}
          />
        ) : activeTab === 1 ? (
          <StudentScheduleEvaluationCard
            item={item}
            index={index}
            arr={filteredArray}
          />
        ) : (
          <StudentScheduleTransactionCard
            item={item}
            index={index}
            arr={filteredArray}
          />
        )}
      </>
    );
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
            gutterBottom={12}
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
          <HorizontalFilterTab
            onTabChange={onTabChange}
            scrollRef={scrollRef}
            tabs={tabs}
          />

          <FlatList
            data={filteredArray}
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
        {common?.bubbleChat && (
          <TouchableOpacity
            style={styles.chatBubbleContainer}
            onPress={() => {
              navigation.navigate('NotificationChat');
            }}
            activeOpacity={0.7}>
            <View style={styles.bubbleUnReadDotContainer}>
              <View style={styles.bubbleUnReadDot} />
            </View>

            <View style={styles.bubbleIcon}>
              <Icon
                type={'Ionicons'}
                name={'chatbubble-ellipses-sharp'}
                color={R.color.white}
                size={20}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <ScheduleLessonsFilterModal isVisibleModal={isModal} />
    </ScreenBoiler>
  );
}
export default ScheduledLessonsScreen;

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
  flatListContainer: {
    paddingTop: R.unit.scale(28),
  },
  flatListContentContainer: {
    flexGrow: 1,
    paddingBottom: R.unit.scale(Platform.OS === 'ios' ? 100 : 60),
    justifyContent: 'flex-start',
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
  chatBubbleContainer: {
    backgroundColor: R.color.hyperLinkColor,
    borderRadius: R.unit.scale(20),
    position: 'absolute',
    top:
      Platform.OS === 'ios' ? R.unit.height(1 - 0.24) : R.unit.height(1 - 0.21),
    right: R.unit.scale(30),
    height: R.unit.scale(56),
    width: R.unit.scale(56),
    zIndex: 999999,
  },
  bubbleUnReadDotContainer: {
    width: '100%',
    alignItems: 'flex-end',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  bubbleUnReadDot: {
    backgroundColor: 'red',
    height: R.unit.scale(15),
    width: R.unit.scale(15),
    borderRadius: R.unit.scale(10),
    borderColor: R.color.white,
    borderWidth: R.unit.scale(3),
  },
  bubbleIcon: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
