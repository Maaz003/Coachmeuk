import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import R from '@components/utils/R';

function Carousel(props) {
  const {
    data,
    scrollRef,
    renderItem,
    activeCarouselItem,
    pagingEnabled,
    paginationGap = 5,
    activeDotColor = R.color.mainColor,
    inActiveDotColor = R.color.mainColor,
    activeDotSize = 7,
    inActiveDotSize = 4,
    renderItemWidth = 0.92,
    rowStyles,
  } = props;

  const [activeItem, setActiveItem] = useState(0);

  const handleOnScroll = event => {
    let activeIndex = Math.round(
      event.nativeEvent.contentOffset.x / R.unit.width(renderItemWidth),
    );
    activeCarouselItem(activeIndex);
    setActiveItem(activeIndex);
  };

  return (
    <>
      <ScrollView
        horizontal={true}
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        contentContainerStyle={styles.scrollContent}
        style={styles.horizontalScroll}>
        {data?.map((item, index) => {
          return (
            <View>{React.cloneElement(renderItem, {...item, index})}</View>
          );
        })}
      </ScrollView>
      {pagingEnabled && (
        <View
          style={{
            ...styles.paginationView,
            columnGap: R.unit.scale(paginationGap),
          }}>
          {data?.map((item, index) => {
            return (
              <View
                style={{
                  ...styles.dots,
                  backgroundColor:
                    activeItem === index ? activeDotColor : inActiveDotColor,
                  padding: R.unit.scale(
                    activeItem === index ? activeDotSize : inActiveDotSize,
                  ),
                }}
              />
            );
          })}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  horizontalScroll: {
    width: '100%',
    marginTop: R.unit.scale(16),
  },
  scrollContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tab: {
    marginRight: R.unit.scale(80),
    paddingRight: R.unit.scale(5),
  },
  dots: {
    backgroundColor: R.color.mainColor,
    borderRadius: R.unit.scale(10),
    marginRight: R.unit.scale(2),
  },
  paginationView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: R.unit.scale(16),
  },
});

export default Carousel;
