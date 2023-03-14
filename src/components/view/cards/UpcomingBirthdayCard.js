import React from 'react';
import {StyleSheet, View} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import Image from '@components/common/Image';

function UpcomingBirthdayCard(props) {
  return (
    <View style={[R.styles.twoItemsRow, styles.mainLayout]}>
      <Image
        imageSource={R.image.DummyUser()}
        imageContainerStyles={styles.image}
      />
      <View>
        <Text
          variant={'body3'}
          font={'PoppinsSemiBold'}
          color={R.color.blackShade4}
          align={'left'}
          transform={'none'}>
          John Doe
        </Text>
        <Text
          variant={'body4'}
          font={'PoppinsMedium'}
          color={R.color.blackShade4}
          gutterTop={4}
          align={'left'}
          transform={'none'}>
          IT Manager
        </Text>
      </View>
    </View>
  );
}
export default UpcomingBirthdayCard;

const styles = StyleSheet.create({
  mainLayout: {
    width: '48%',
    backgroundColor: R.color.white,
    borderRadius: 5,
    padding: R.unit.scale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    overflow: 'hidden',
  },
  image: {
    height: R.unit.scale(40),
    width: R.unit.scale(40),
    marginRight: R.unit.scale(10),
    borderWidth: 0,
    borderRadius: R.unit.scale(20),
  },
});
