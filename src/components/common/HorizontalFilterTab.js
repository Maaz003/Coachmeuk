import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';

function HorizontalFilterTab(props) {
  const {
    tabs,
    onTabChange,
    scrollRef,
    tabStyles,
    scrollContainer,
    scrollContentContainer,
    key = 'title',
  } = props;
  const [page, setPage] = useState(0);

  const tabChange = index => {
    setPage(index);
    onTabChange(index);
  };

  return (
    <ScrollView
      horizontal={true}
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      style={[styles.horizontalScroll, scrollContainer]}
      contentContainerStyle={[styles.scrollContent, scrollContentContainer]}>
      {tabs?.map((item, index) => {
        return (
          <TouchableOpacity
            style={{
              ...styles.tab,
              backgroundColor:
                page === index ? R.color.blackShade4 : R.color.gray6,
              tabStyles,
            }}
            activeOpacity={0.7}
            onPress={() => tabChange(index)}>
            <Text
              variant={'body3'}
              font={'InterRegular'}
              color={page === index ? R.color.white : R.color.blackShade4}
              align={'left'}
              lineHeight={25}
              transform={'none'}>
              {item[key]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  horizontalScroll: {
    width: '100%',
    maxHeight: R.unit.scale(40),
  },
  scrollContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: R.unit.scale(10),
  },
  tab: {
    height: R.unit.scale(36),
    paddingHorizontal: R.unit.scale(16),
    // paddingVertical: R.unit.scale(8),
    borderRadius: R.unit.scale(10),
    marginRight: R.unit.scale(8),
    justifyContent: 'center',
  },
  underLine: {
    backgroundColor: R.color.mainColor,
    height: R.unit.scale(4),
    borderTopRightRadius: R.unit.scale(2),
    borderTopLeftRadius: R.unit.scale(2),
    marginBottom: -10,
    width: '100%',
  },
});

export default HorizontalFilterTab;
