import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import {VisaCardIcon} from '@components/utils/Svg';
import Divider from '@components/common/Divider';

function StudentScheduleTransactionCard(props) {
  const {navigation, item, index, arr} = props;

  return (
    <>
      {index === 0 && (
        <View style={[R.styles.rowView, styles.titleView]}>
          <Text
            variant={'body2'}
            font={'InterSemiBold'}
            color={R.color.gray}
            align={'left'}
            transform={'none'}>
            Date
          </Text>

          <Text
            variant={'body2'}
            font={'Sequel551'}
            color={R.color.gray}
            align={'left'}
            transform={'none'}>
            Total
          </Text>
        </View>
      )}

      <View style={styles.mainCardLayout}>
        <View style={R.styles.rowView}>
          <View style={R.styles.twoItemsRow}>
            <Text
              variant={'body2'}
              font={'InterSemiBold'}
              color={item?.isTransferred ? R.color.black : R.color.gray}
              align={'left'}
              transform={'none'}>
              {item?.date}
            </Text>
            {!item?.isTransferred && (
              <Text
                variant={'body2'}
                font={'InterSemiBold'}
                color={R.color.gray}
                align={'left'}
                style={{marginLeft: R.unit.scale(4)}}
                transform={'none'}>
                (Upcoming)
              </Text>
            )}
          </View>

          <Text
            variant={'body2'}
            font={'Sequel551'}
            color={R.color.gray}
            align={'left'}
            transform={'none'}>
            ${item?.payment}
          </Text>
        </View>

        <View style={[R.styles.twoItemsRow, styles.cardView]}>
          <VisaCardIcon />
          <Text
            variant={'body2'}
            font={'InterRegular'}
            color={R.color.black}
            align={'left'}
            style={{marginLeft: R.unit.scale(4)}}
            transform={'none'}>
            •••• •••• •••• {item.last4}
          </Text>
        </View>

        {index !== arr.length - 1 && (
          <Divider
            lineStyles={{
              marginVertical: R.unit.scale(20),
            }}
          />
        )}
      </View>
    </>
  );
}
export default StudentScheduleTransactionCard;

const styles = StyleSheet.create({
  mainCardLayout: {
    backgroundColor: R.color.white,
  },
  titleView: {
    marginBottom: R.unit.scale(32),
  },
  cardView: {
    marginTop: R.unit.scale(4),
  },
  detailView: {
    marginLeft: R.unit.scale(16),
  },
  buttonLayout: {
    flex: 0.85,
    justifyContent: 'flex-end',
  },
});
