import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import R from '@components/utils/R';
import Image from '@components/common/Image';

function ScrollContainer(props) {
  const {
    contentContainerStyles,
    containerStyles,
    children,
    keyboardShouldPersistTaps = 'always',
    linearColors = [R.color.mainColor, R.color.mainColor2],
    paddingBottom = 0,
    gradientHeight = 0.5,
  } = props;

  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <LinearGradient
        colors={linearColors}
        style={{...styles.gradientView, height: R.unit.height(gradientHeight)}}
      />

      <ScrollView
        style={[styles.mainLayout, containerStyles]}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        contentContainerStyle={[
          styles.contentContainer,
          contentContainerStyles,
          {paddingBottom: R.unit.scale(paddingBottom)},
        ]}>
        <View style={[R.styles.rowView, styles.header]}>
          <Image
            imageSource={R.image.DummyUser()}
            imageContainerStyles={{
              height: 50,
              width: R.unit.width(0.28),
              borderRadius: 4,
            }}
          />
          <Image
            imageSource={R.image.DummyUser()}
            imageContainerStyles={{
              backgroundColor: 'red',
              height: 50,
              width: 50,
            }}
          />
        </View>
        {children}
      </ScrollView>
    </View>
  );
}
export default ScrollContainer;

const styles = StyleSheet.create({
  mainLayout: {
    height: R.unit.height(1),
    width: R.unit.width(1),
  },
  contentContainer: {
    flexGrow: 1,
  },
  gradientView: {
    width: R.unit.height(1),
    borderBottomRightRadius: R.unit.height(1),
    borderBottomLeftRadius: R.unit.height(1),
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1,
    opacity: 0.2,
    position: 'absolute',
  },
  header: {
    width: R.unit.width(1),
    paddingTop: R.unit.scale(20),
    paddingHorizontal: R.unit.scale(20),
  },
});
