import React from 'react';
import {StyleSheet, View} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import Image from '@components/common/Image';
import Button from '@components/common/Button';

function LeavesRequestCard(props) {
  const {item} = props;

  return (
    <View style={[styles.cardLayout, R.styles.twoItemsRow]}>
      <Image
        imageSource={R.image.DummyUser()}
        imageContainerStyles={styles.cardImage}
        resizeMode={'cover'}
      />
      <View style={styles.contentView}>
        <View style={R.styles.rowView}>
          <Text
            variant={'body3'}
            font={'PoppinsSemiBold'}
            color={R.color.black2}
            align={'left'}
            style={{maxWidth: '60%'}}
            numberOfLines={2}
            transform={'capitalize'}>
            JOHN DOE
          </Text>
          <Text
            variant={'body5'}
            font={'RalewayBold'}
            color={R.color.black2}
            align={'left'}
            numberOfLines={2}
            transform={'capitalize'}>
            03-01-2023/ To /10-01-2023
          </Text>
        </View>
        <Text
          variant={'body4'}
          font={'PoppinsMedium'}
          color={R.color.black2}
          align={'left'}
          numberOfLines={2}
          transform={'capitalize'}>
          Sick
        </Text>
        <View style={{...R.styles.rowView, width: '100%'}}>
          <Text
            variant={'body4'}
            font={'RalewayMedium'}
            color={R.color.black2}
            align={'left'}
            numberOfLines={1}
            transform={'capitalize'}>
            Requested leaves
          </Text>
          <Text
            variant={'body4'}
            font={'RalewayMedium'}
            color={R.color.black2}
            align={'left'}
            style={{padding: R.unit.scale(10)}}
            transform={'capitalize'}>
            {item?.leaves}
          </Text>
          <View
            style={{
              ...R.styles.twoItemsRow,
              justifyContent: 'space-between',
              width: '45%',
            }}>
            <Button
              value="Approve"
              bgColor={R.color.secondaryColor2}
              width={'47%'}
              size={'sm'}
              variant={'body4'}
              font={'PoppinsRegular'}
              color={R.color.white}
              disabled={false}
              loaderColor={R.color.white}
              onPress={() => null}
            />
            <Button
              value="Reject"
              bgColor={R.color.mainColor}
              width={'47%'}
              size={'sm'}
              variant={'body4'}
              font={'PoppinsRegular'}
              color={R.color.white}
              disabled={false}
              loaderColor={R.color.white}
              onPress={() => null}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
export default LeavesRequestCard;

const styles = StyleSheet.create({
  cardLayout: {
    width: '100%',
    borderRadius: R.unit.scale(10),
    paddingHorizontal: R.unit.scale(10),
    paddingVertical: R.unit.scale(16),
    backgroundColor: R.color.white,
    overflow: 'hidden',
    zIndex: 999999999,
    shadowColor: '#D4783B',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  cardImage: {
    width: R.unit.scale(50),
    height: R.unit.scale(50),
    borderRadius: R.unit.scale(30),
    borderWidth: 0,
  },
  contentView: {
    marginLeft: R.unit.scale(8),
    flex: 1,
    overflow: 'hidden',
  },
});
