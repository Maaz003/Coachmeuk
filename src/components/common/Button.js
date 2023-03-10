import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  I18nManager,
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'native-base';
import {scale} from 'react-native-size-matters';
import Text from './Text';
import R from '@components/utils/R';

const Button = props => {
  const sizes = {
    sm: R.unit.scale(36),
    md: R.unit.scale(48),
    lg: R.unit.scale(56),
  };

  const {
    size,
    btnWrapperStyles,
    color = 'white',
    gutterTop = 0,
    gutterBottom = 0,
    loader = false,
    loaderColor = R.color.white,
    borderColor = R.color.mainColor,
    bgColor = 'white',
    borderWidth = 0,
    iconColor = R.color.white,
    textStyles,
    variant = 'body2',
    font = 'InterSemiBold',
    iconSize = 16,
    activeOpacity,
    disabledButtonBGColor = R.color.disabledButtonColor,
    disabledButtonTextColor = R.color.disabledButtonTextColor,
    //functionality
    onPress,
    disabled,
    isSocial,
    socialType,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity ? props.activeOpacity : 0.6}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.mainBtn,
        {
          width: props.width,
          height: sizes[size],
          backgroundColor: disabled ? disabledButtonBGColor : bgColor,
          borderColor: borderColor,
          marginTop: R.unit.scale(gutterTop),
          marginBottom: R.unit.scale(gutterBottom),
          borderWidth: R.unit.scale(borderWidth),
        },
        btnWrapperStyles,
        props.justifyContent && {
          justifyContent: props.justifyContent,
        },
      ]}>
      {props.iconName && (
        <Icon
          name={props.iconName}
          type={props.iconType}
          style={[
            styles.iconCustom,
            props.iconStyle && props.iconStyle,
            {fontSize: iconSize, color: iconColor},
          ]}
        />
      )}

      <Text
        style={[
          styles.buttonText,
          {
            color: disabled ? disabledButtonTextColor : color,
          },

          textStyles,
        ]}
        variant={variant}
        font={font}>
        {!loader && props.value}
      </Text>
      {loader && (
        <ActivityIndicator
          style={styles.indicatorStyle}
          size="small"
          color={loaderColor}
        />
      )}

      <Text
        style={[
          styles.text,
          {color: props.textColor, fontSize: scale(15)},
          props.textTransform && {
            textTransform: props.textTransform,
          },
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainBtn: {
    flexDirection: 'row',
    borderRadius: R.unit.scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
  indicatorStyle: {
    paddingRight: 5,
    paddingLeft: I18nManager.isRTL ? 5 : 0,
  },
  iconCustom: {
    color: '#C0C0C0',
    paddingRight: R.unit.scale(10),
  },
});

export default Button;
