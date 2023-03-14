import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';

function EventsCard(props) {
  console.log('PRIPS', props);

  return (
    <TouchableOpacity
      onPress={() => null}
      activeOpacity={1}
      style={{
        ...styles.cardLayout,
        ...(props.activeItem == props.index
          ? {
              zIndex: 999999999,
              // shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.51,
              shadowRadius: 13.16,
              elevation: 20,
            }
          : {
              zIndex: -1,
              // height: 200,
            }),
      }}>
      <Image
        source={R.image.DummyUser()}
        style={styles.cardImage}
        resizeMode={'cover'}
      />
      <View style={styles.contentView}>
        <View style={R.styles.rowView}>
          <Text
            variant={'body3'}
            font={'RalewayExtraBold'}
            color={R.color.black2}
            align={'left'}
            numberOfLines={2}
            transform={'capitalize'}>
            {props?.title}
          </Text>
          <Text
            variant={'body5'}
            font={'RalewayBold'}
            color={R.color.black2}
            align={'left'}
            numberOfLines={2}
            transform={'capitalize'}>
            {props?.date}
          </Text>
        </View>
        <Text
          variant={'body5'}
          font={'RalewayMedium'}
          color={R.color.black2}
          align={'left'}
          numberOfLines={3}
          transform={'capitalize'}>
          {props?.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export default EventsCard;

const styles = StyleSheet.create({
  cardLayout: {
    borderRadius: R.unit.scale(10),
    backgroundColor: R.color.white,
    width: R.unit.width(0.8),
    justifyContent: 'center',
    marginRight: R.unit.scale(20),
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: R.unit.scale(100),
  },
  contentView: {
    paddingHorizontal: R.unit.scale(20),
    paddingVertical: R.unit.scale(24),
  },
});
