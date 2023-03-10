import React from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import R from '@components/utils/R';
import Icon from './Icon';

const ButtonIcon = props => {
  const {
    iconName,
    iconType = 'Ionicons',
    iconSize = 20,
    iconColor = R.color.blackShade4,
    iconStyles,
    activeOpacity = 0.6,
    buttonLayoutStyles,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.buttonLayout, buttonLayoutStyles]}
      activeOpacity={activeOpacity}
      onPress={onPress}>
      <Icon
        type={iconType}
        name={iconName}
        color={iconColor}
        size={iconSize}
        iconStyles={[iconStyles]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    padding: R.unit.scale(
      Platform.OS == 'ios' && R.unit.width(1) > 1000 ? 16 : 16.5,
    ),
    borderColor: R.color.gray4,
    borderWidth: R.unit.scale(0.75),
    borderRadius: R.unit.scale(10),
    marginRight: R.unit.scale(8),
  },
});

export default ButtonIcon;
