import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/header/ScreenBoiler';
import Button from '@components/common/Button';
import EmptyListError from '@components/common/EmptyListError';
import {SearchErrorIcon} from '@components/utils/Svg';
import TextInput from '@components/common/TextInput';
import FixedContainer from '@components/view/screens/ScrollContainer';
import EmployeeCard from '@components/view/cards/EmployeeCard';

function EmployeeProfileScreen(props) {
  const headerProps = {isSubHeader: false};

  const [text, setText] = useState('');

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
    {
      name: 'John Doe',
      reason: 'Sick',
      leaves: '20',
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
    {
      name: 'John Doe',
      reason: 'Sick',
      leaves: '20',
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
    return <EmployeeCard item={item} />;
  };

  return (
    <ScreenBoiler headerProps={headerProps}>
      <FixedContainer linearColors={['#EEAA42', '#ED973C', '#EB5C2B']}>
        <View style={styles.contentView}>
          <View style={{...R.styles.rowView, alignItems: 'flex-end'}}>
            <Text
              variant={'body2'}
              font={'RalewayExtraBold'}
              color={R.color.blackShade4}
              align={'left'}
              transform={'none'}>
              Employees
            </Text>
            <Button
              value="Add Employee"
              bgColor={R.color.secondaryColor2}
              width={'30%'}
              size={'xsm'}
              variant={'body4'}
              color={R.color.white}
              disabled={false}
              loaderColor={R.color.white}
              onPress={() => null}
            />
          </View>
          <TextInput
            secureText={false}
            placeholder={'Search Employee'}
            onChangeText={data => {
              setText(data);
            }}
            gutterTop={12}
            color={R.color.black2}
            value={text}
            widthInPercentage={'100%'}
            returnKeyType={'done'}
            iconName={'search'}
            iconType={'Fontisto'}
            alignItems={'center'}
            inputStyles={{
              paddingVertical: R.unit.scale(12),
            }}
            leftIconStyles={{
              color: R.color.gray7,
              fontSize: R.unit.scale(16),
            }}
          />

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
      </FixedContainer>
    </ScreenBoiler>
  );
}
export default EmployeeProfileScreen;

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
    paddingTop: R.unit.scale(10),
    height: R.unit.height(0.62),
  },
  flatListContentContainer: {
    flexGrow: 1,
    rowGap: R.unit.scale(12),
    justifyContent: 'flex-start',
    paddingBottom: R.unit.scale(30),
  },
});
