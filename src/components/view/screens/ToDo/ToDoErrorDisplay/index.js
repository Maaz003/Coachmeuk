import React, {useState} from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import Button from '@components/common/Button';

function ToDoErrorDisplay(props) {
  const {
    icon,
    heading,
    text,
    isFooter = true,
    isButton,
    buttonText = 'dummy',
    onPress,
  } = props;
  const [activeSections, setActiveSections] = useState([]);

  return (
    <View style={styles.errorContainer}>
      <View style={styles.header}>
        <View style={styles.svgView}>{icon}</View>
        <Text
          variant={'h4'}
          font={'Sequel651'}
          color={R.color.blackShade4}
          align={'center'}
          gutterBottom={8}
          transform={'none'}>
          {heading}
        </Text>
        <Text
          variant={'body2'}
          font={'InterRegular'}
          color={R.color.gray}
          align={'center'}
          style={{width: '70%'}}
          transform={'none'}>
          {text}
        </Text>
        {isButton && (
          <Button
            value={buttonText}
            bgColor={R.color.mainColor}
            width={'50%'}
            size={'lg'}
            gutterTop={16}
            color={R.color.white}
            borderColor={R.color.mainColor}
            disabled={false}
            loaderColor={R.color.white}
            borderWidth={1}
            onPress={() => onPress()}
          />
        )}
      </View>
      {isFooter && (
        <View style={styles.footer}>
          <Text
            variant={'body4'}
            font={'InterRegular'}
            color={R.color.blackShade4}
            align={'center'}
            style={{width: '70%'}}
            transform={'none'}>
            Maybe we can help speed up the process by answering some{' '}
            <Text
              variant={'body4'}
              font={'InterSemiBold'}
              color={R.color.hyperLinkColor}
              align={'center'}
              style={{width: '70%'}}
              transform={'none'}>
              questions
            </Text>
            ?
          </Text>
        </View>
      )}
    </View>
  );
}
export default ToDoErrorDisplay;

const styles = ScaledSheet.create({
  errorContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  svgView: {
    aspectRatio: 1,
    height: R.unit.scale(49),
    marginBottom: R.unit.scale(24),
  },
  header: {
    height: '60%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footer: {
    height: '30%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: R.unit.scale(20),
  },
});
