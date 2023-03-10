import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import Text from '@components/common/Text';
import Button from '@components/common/Button';
import {TrashIcon} from '@components/utils/Svg';
import TextInput from '@components/common/TextInput';
import R from '@components/utils/R';
import {
  experiencelevelData,
  genderData,
  sportTypeData,
} from '@components/constants/studentData';
import DropDown from '@components/common/DropDown';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from '@components/common/Icon';
import Divider from '@components/common/Divider';
import HoverText from '@components/common/HoverText';
import {useDispatch} from 'react-redux';
import ReuseableFunctions from '@components/utils/ReusbaleFunctions';

export default function PersonalInfoTab(props) {
  const [gender, setGender] = useState('Male');
  const [sportType, setSportType] = useState('Sport type');
  const [experienceLevel, setExperienceLevel] = useState('Experience level');
  const [picture, setPicture] = useState();

  const dispatch = useDispatch();
  const usableFuncs = ReuseableFunctions({
    actionCall: dispatch,
  });
  const uploadImage = async () => {
    const options = {
      mediaType: 'photo',
      cropping: true,
    };
    let mediaRes = await usableFuncs.uploadPictures(options);
    if (!!mediaRes) {
      setPicture(mediaRes.path);
    }
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'always'}
      enableOnAndroid
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      scrollToOverflowEnabled={false}
      style={[R.styles.container, styles.mainLayout]}>
      <View style={styles.contentView}>
        <View style={R.styles.twoItemsRow}>
          {picture?.length > 0 ? (
            <View>
              <Image
                source={{uri: picture}}
                style={styles.pictureSize}
                resizeMode={'cover'}
              />
            </View>
          ) : (
            <TouchableOpacity activeOpacity={0.6} onPress={uploadImage}>
              <Image
                source={R.image.BaseBallSport()}
                style={styles.defaultImage}
              />
            </TouchableOpacity>
          )}

          <View style={styles.twoColumnView}>
            <Text
              variant={'h5'}
              font={'Sequel551'}
              color={R.color.blackShade4}
              align={'left'}
              transform={'none'}
              lineHeight={24}>
              Add your profile pic
            </Text>
            <Text
              variant={'body3'}
              font={'Inter-Regular'}
              gutterTop={8}
              color={R.color.blackShade2}
              align={'left'}
              transform={'none'}>
              Upload PNG or JPEG file. File size
              {'\n'}limit is up to 5MB
            </Text>
          </View>
        </View>

        <View style={styles.uploadNewPictureButton}>
          <Button
            value={'Upload new picture'}
            bgColor={R.color.mainColor}
            width={'100%'}
            size={'lg'}
            onPress={uploadImage}
            disabled={false}
            color={R.color.white}
            loaderColor={R.color.white}
          />
          <TouchableOpacity
            onPress={() => setPicture('')}
            style={styles.deleteView}
            activeOpacity={0.9}>
            <View style={styles.editSvg}>
              <TrashIcon height="100%" width="100%" />
            </View>
          </TouchableOpacity>
        </View>
        <TextInput
          secureText={false}
          title={'Full Name'}
          color={R.color.black}
          gutterTop={32}
          isRightTitle={false}
          backgroundColor={'white'}
        />
        <TextInput
          secureText={false}
          title={'Phone number'}
          color={R.color.black}
          gutterTop={24}
          isRightTitle={false}
          backgroundColor={'white'}
        />
        <DropDown
          zIndex={1000}
          zIndexIOS={1000}
          zIndexInverse={2000}
          title={'Gender'}
          arrayData={genderData}
          inputContainerStyle={styles.dropDownContainer}
          placeholder={'Select Gender'}
          value={gender}
          gutterTop={24}
          loaderParentCall={data => {
            setGender(data.value);
          }}
        />
        <TextInput
          secureText={false}
          title={'Date of birth'}
          color={R.color.black}
          gutterTop={24}
          isRightTitle={false}
          backgroundColor={'white'}
        />
        <TextInput
          secureText={false}
          title={'Email address'}
          color={R.color.black}
          gutterTop={24}
          isRightTitle={false}
          backgroundColor={'white'}
        />
        <DropDown
          zIndex={3000}
          zIndexIOS={1000}
          zIndexInverse={2000}
          title={'Experience'}
          arrayData={sportTypeData}
          inputContainerStyle={styles.dropDownContainer}
          placeholder={'Sport type'}
          value={sportType}
          gutterTop={24}
          loaderParentCall={data => {
            setSportType(data.value);
          }}
        />
        <DropDown
          zIndex={1000}
          zIndexIOS={1000}
          zIndexInverse={2000}
          arrayData={experiencelevelData}
          inputContainerStyle={styles.dropDownContainer}
          placeholder={'Experience level'}
          value={experienceLevel}
          gutterTop={24}
          loaderParentCall={data => {
            setExperienceLevel(data.value);
          }}
        />
        <TouchableOpacity
          style={{
            ...R.styles.twoItemsRow,
            paddingVertical: R.unit.scale(10),
            marginTop: R.unit.scale(24),
          }}>
          <Icon
            name={'add'}
            type={'Ionicons'}
            color={R.color.hyperLinkColor}
            size={16}
            iconStyles={{
              marginRight: R.unit.scale(13),
            }}
          />
          <Text
            variant={'body2'}
            font={'InterMedium'}
            color={R.color.hyperLinkColor}
            align={'left'}
            transform={'none'}>
            Add experience
          </Text>
        </TouchableOpacity>
        <TextInput
          secureText={false}
          title={'About me'}
          placeholder={'Drop a few scentence about yourself...'}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          titleColor={R.color.black}
          color={R.color.black}
          gutterTop={24}
          isRightTitle={false}
          backgroundColor={'white'}
          multiline={true}
          numberOfLines={60}
          height={136}
        />
        <View style={styles.saveChanges}>
          <Button
            value={'Save changes'}
            bgColor={R.color.gray2}
            width={'50%'}
            gutterTop={24}
            size={'lg'}
            color={R.color.gray}
            disabled={false}
            loaderColor={R.color.white}
          />
        </View>
        <Text
          variant={'h5'}
          font={'Sequel551'}
          gutterTop={48}
          color={R.color.blackShade4}
          align={'left'}
          lineHeight={24}
          transform={'none'}>
          Privacy settings
        </Text>
        <TextInput
          secureText={true}
          title={'Current password'}
          color={R.color.black}
          gutterTop={24}
          isRightTitle={false}
          backgroundColor={'white'}
        />
        <TextInput
          secureText={false}
          title={'New password'}
          color={R.color.black}
          gutterTop={24}
          isRightTitle={false}
          backgroundColor={'white'}
        />
        <TextInput
          secureText={false}
          title={'Confirm new password'}
          color={R.color.black}
          gutterTop={24}
          isRightTitle={false}
          backgroundColor={'white'}
        />
        <View style={[R.styles.rowView, styles.updateChangesContainer]}>
          <Button
            value={'Cancel'}
            bgColor={R.color.white}
            width={'47%'}
            size={'lg'}
            color={R.color.blackShade4}
            disabled={false}
            loaderColor={R.color.white}
            borderWidth={R.unit.scale(1)}
            borderColor={R.color.gray4}
          />
          <Button
            value={'Save changes'}
            bgColor={R.color.mainColor}
            width={'47%'}
            size={'lg'}
            color={R.color.white}
            disabled={false}
            loaderColor={R.color.white}
          />
        </View>
        <Divider />

        <Text
          variant={'body3'}
          font={'InterRegular'}
          color={R.color.gray}
          align={'left'}
          transform={'none'}>
          Can't remember your current password?
        </Text>

        <HoverText
          text={'Reset password via email'}
          hoverStyles={{
            marginBottom: R.unit.scale(50),
          }}
        />

        <Text
          variant={'h6'}
          font={'Sequel651'}
          color={R.color.blackShade5}
          align={'left'}
          gutterBottom={12}
          transform={'none'}>
          Disable account
        </Text>
        <Text
          variant={'body2'}
          font={'InterSemiBold'}
          color={R.color.inputFieldErrorMessageColor}
          align={'left'}
          gutterBottom={24}
          transform={'none'}>
          PLEASE NOTE!{' '}
          <Text
            variant={'body2'}
            font={'InterRegular'}
            color={R.color.blackShade5}
            align={'left'}
            transform={'none'}>
            This means your account will be hidden until you reactivate it by
            logging back in.
          </Text>
        </Text>
        <Button
          value={'Disable account'}
          bgColor={R.color.white}
          width={'100%'}
          size={'lg'}
          color={R.color.blackShade4}
          disabled={false}
          gutterBottom={40}
          loaderColor={R.color.white}
          borderWidth={R.unit.scale(1)}
          borderColor={R.color.gray4}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,

    flex: 1,
  },
  defaultImage: {
    height: R.unit.scale(88),
    width: R.unit.scale(66),
    borderRadius: R.unit.scale(10),
  },
  editSvg: {
    aspectRatio: 1,
    height: R.unit.height(0.023),
  },
  twoColumnView: {
    flexDirection: 'column',
    marginLeft: R.unit.scale(20),
  },
  deleteView: {
    backgroundColor: R.color.white,
    borderColor: R.color.gray4,
    borderWidth: R.unit.scale(0.75),
    borderRadius: R.unit.scale(10),
    padding: R.unit.scale(18),
    left: 10,
    borderRadius: R.unit.scale(10),
  },
  updateChangesContainer: {
    marginBottom: R.unit.scale(24),
    marginTop: R.unit.scale(24),
  },
  dropDownContainer: {
    borderRadius: R.unit.scale(10),
    opacity: 5.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },

  contentView: {
    //paddingHorizontal: R.unit.scale(16),
    width: '100%',
    justifyContent: 'center',
    marginTop: R.unit.scale(26),
  },

  uploadNewPictureButton: {
    flexDirection: 'row',
    marginTop: R.unit.scale(20),
    width: '80%',
    backgroundColor: R.color.white,
  },
  saveChanges: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: R.color.white,
  },
  pictureSize: {
    height: R.unit.scale(88),
    width: R.unit.scale(66),
    borderRadius: 10,
  },
});
