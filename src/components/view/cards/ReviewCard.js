import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Divider from '@components/common/Divider';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';

function ReviewCard(props) {
  const {navigation, data, index, arr, showButton = false} = props;
  return (
    <>
      <View
        style={[
          R.styles.twoItemsRow,
          {
            alignItems: 'flex-start',
            marginBottom: R.unit.scale(16),
          },
        ]}>
        <Image
          source={data?.picture}
          resizeMode={'contain'}
          style={styles.image}
        />
        <View style={{...styles.titleView}}>
          <View style={R.styles.twoItemsRow}>
            <Text
              variant={'body2'}
              font={'InterSemiBold'}
              color={R.color.blackShade4}
              align={'left'}
              numberOfLines={2}
              style={{
                maxWidth: '50%',
              }}
              transform={'none'}>
              {data?.name}
            </Text>
            <View
              style={{
                ...R.styles.dot,
                marginHorizontal: R.unit.scale(16),
              }}
            />
            <Text
              variant={'body2'}
              font={'InterRegular'}
              color={R.color.black}
              align={'left'}
              numberOfLines={2}
              transform={'none'}>
              {data?.date}
            </Text>
          </View>

          <View style={{...R.styles.twoItemsRow, marginTop: R.unit.scale(10)}}>
            {[...Array(data?.rating)]?.map(() => {
              return (
                <Icon
                  name={'star'}
                  type={'Foundation'}
                  color={R.color.mainColor}
                  size={16}
                  iconStyles={{marginRight: R.unit.scale(4)}}
                />
              );
            })}
          </View>
        </View>
      </View>

      <Text
        variant={'body2'}
        font={'InterRegular'}
        color={R.color.gray}
        align={'left'}
        transform={'none'}>
        {data?.text}
      </Text>

      <View style={styles.tagLayout}>
        {data?.tags?.map(item => {
          return (
            <View style={[styles.tag]}>
              <Text
                variant={'body2'}
                font={'InterRegular'}
                color={R.color.black}
                align={'center'}
                transform={'none'}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>

      {showButton && (
        <View style={[R.styles.rowView, styles.buttonContainer]}>
          <TouchableOpacity
            style={styles.cancelButton}
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate('Inbox', {
                screen: 'ChatsList',
              });
            }}>
            <Icon
              type={'Ionicons'}
              name={'chatbubble-ellipses-outline'}
              color={R.color.blackShade4}
              size={20}
            />
          </TouchableOpacity>

          <Button
            value={'View lesson info'}
            bgColor={R.color.white}
            width={'82%'}
            size={'lg'}
            font={'InterMedium'}
            variant={'body3'}
            color={R.color.blackShade4}
            borderColor={R.color.gray4}
            disabled={false}
            loaderColor={R.color.white}
            borderWidth={0.75}
            onPress={() => {
              navigation.navigate('Home', {
                screen: 'LessonDetails',
                params: {
                  type: 'Profile',
                },
              });
            }}
          />
        </View>
      )}

      {index !== arr.length - 1 && (
        <Divider
          lineStyles={{
            marginVertical: R.unit.scale(32),
          }}
        />
      )}
    </>
  );
}
export default ReviewCard;

const styles = StyleSheet.create({
  image: {
    width: R.unit.scale(56),
    height: R.unit.scale(56),
    borderRadius: R.unit.scale(10),
  },
  buttonContainer: {
    marginTop: R.unit.scale(16),
    justifyContent: 'flex-end',
  },
  buttonLayout: {
    width: '100%',
  },
  cancelButton: {
    padding: R.unit.scale(
      Platform.OS == 'ios' && R.unit.width(1) > 1000
        ? 16
        : Platform.OS == 'ios' && R.unit.width(1) < 1000
        ? 12
        : 16,
    ),
    borderColor: R.color.gray4,
    borderWidth: R.unit.scale(0.75),
    borderRadius: R.unit.scale(10),
    marginRight: R.unit.scale(8),
  },
  tagLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  tag: {
    backgroundColor: R.color.white,
    paddingVertical: R.unit.scale(8),
    paddingHorizontal: R.unit.scale(16),
    borderRadius: R.unit.scale(10),
    justifyContent: 'space-between',
    marginRight: R.unit.scale(12),
    borderWidth: R.unit.scale(1),
    borderColor: R.color.gray4,
    marginTop: R.unit.scale(16),
  },
  titleView: {
    marginLeft: R.unit.scale(16),
    marginTop: R.unit.scale(5),
  },
});
