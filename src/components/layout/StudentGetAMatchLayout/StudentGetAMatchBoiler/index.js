import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Button from '@components/common/Button';
import R from '@components/utils/R';
import {LogoShortIcon} from '@components/utils/Svg';
import HoverText from '@components/common/HoverText';
import Icon from '@components/common/Icon';
import navigation from '@components/navigation/navigationService';

export default function StudentGetAMatchBoiler(props) {
  const {
    children,
    onPressNextButton,
    onPressBackButton,
    isBothButtons = true,
  } = props;

  const onPressIncrementButton = async () => {
    onPressNextButton();
  };

  const onPressDecrementButton = async () => {
    onPressBackButton();
  };

  const navigateScreen = () => {
    navigation.navigate('Explore');
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={R.styles.svgView}>
          <LogoShortIcon />
        </View>
        <View style={R.styles.twoItemsRow}>
          <View style={styles.hoverTextView}>
            <HoverText text={'See results'} />
          </View>
          <TouchableOpacity style={styles.crossIcon} onPress={navigateScreen}>
            <Icon
              name={'cross'}
              size={16}
              type={'Entypo'}
              color={R.color.black}
            />
          </TouchableOpacity>
        </View>
      </View>

      {children}

      <View style={[R.styles.rowView, styles.footerContainer]}>
        {isBothButtons ? (
          <>
            <Button
              value={'Go Back'}
              bgColor={R.color.white}
              width={'40%'}
              size={'lg'}
              color={R.color.black}
              disabled={false}
              loaderColor={R.color.white}
              btnWrapperStyles={{
                justifyContent: 'flex-start',
              }}
              onPress={onPressDecrementButton}
            />
            <Button
              value={'Next'}
              bgColor={R.color.mainColor}
              width={'40%'}
              size={'lg'}
              color={R.color.white}
              disabled={false}
              borderWidth={1}
              borderColor={R.color.gray4}
              onPress={onPressIncrementButton}
            />
          </>
        ) : (
          <Button
            value={'Next'}
            bgColor={R.color.mainColor}
            width={'100%'}
            size={'lg'}
            color={R.color.white}
            disabled={false}
            onPress={onPressIncrementButton}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: R.unit.width(1),
    backgroundColor: R.color.white,
    alignItems: 'center',
  },
  container: {
    width: R.unit.width(1),
    flexDirection: 'row',
    paddingVertical: R.unit.scale(16),
    paddingHorizontal: R.unit.scale(10),
    justifyContent: 'space-between',
  },
  crossIcon: {
    marginTop: R.unit.scale(10),
    marginRight: R.unit.scale(16),
  },
  footerContainer: {
    width: R.unit.width(1),
    padding: R.unit.scale(16),
    borderTopWidth: 1,
    borderTopColor: R.color.gray4,
  },
  hoverTextView: {
    marginRight: R.unit.scale(24),
    marginTop: R.unit.scale(10),
  },
});
