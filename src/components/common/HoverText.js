import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import R from '@components/utils/R';
import Icon from './Icon';
import Text from './Text';

const HoverText = props => {
  const {
    text = 'Forgot Password',
    onPress,
    hoverStyles,
    textColor = R.color.hyperLinkColor,
    iconColor = R.color.hyperLinkColor,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.mainLayout, hoverStyles]}
      onPress={onPress}>
      <Text
        variant={'body3'}
        font={'InterMedium'}
        color={textColor}
        align={'left'}
        transform={'none'}>
        {text}
      </Text>
      <Icon
        name={'arrow-top-right'}
        size={15}
        type={'MaterialCommunityIcons'}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};
export default HoverText;
const styles = StyleSheet.create({
  mainLayout: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  svgView: {
    aspectRatio: 1,
    height: R.unit.height(0.03),
  },
});
