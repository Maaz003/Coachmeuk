import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import Image from '@components/common/Image';
import Icon from '@components/common/Icon';
import {TrashIcon} from '@components/utils/Svg';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
function EmployeeCard(props) {
  const {item} = props;
  const [open, setOpen] = useState(false);

  const menuOptions = [
    {
      screen: '',
      title: 'View Profile',
    },
    {
      screen: '',
      title: 'View Documents',
    },
    {
      screen: '',
      title: 'Permissions',
    },
    {
      screen: '',
      title: 'Leaves History',
    },
    {
      screen: '',
      title: 'Sick Leaves History',
    },
  ];

  const onTriggerPress = () => {
    setOpen(!open);
  };

  const onBackdropPress = () => {
    setOpen(false);
  };

  return (
    <View style={[styles.cardLayout, R.styles.twoItemsRow]}>
      <Image
        imageSource={R.image.DummyUser()}
        imageContainerStyles={styles.cardImage}
        resizeMode={'cover'}
      />
      <View style={styles.contentView}>
        <View style={R.styles.rowView}>
          <View style={{flex: 0.7}}>
            <Text
              variant={'body3'}
              font={'PoppinsSemiBold'}
              color={R.color.black2}
              align={'left'}
              numberOfLines={1}
              transform={'capitalize'}>
              JOHN DOEsadasdsadsadasdsadsadsadsadsad
            </Text>

            <Text
              variant={'body4'}
              font={'PoppinsMedium'}
              color={R.color.black2}
              align={'left'}
              numberOfLines={2}
              transform={'capitalize'}>
              Designation
            </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Menu
              opened={open}
              onBackdropPress={onBackdropPress}
              rendererProps={{
                anchorStyle: {
                  marginTop: R.unit.scale(30),
                },
              }}
              backHandler={true}>
              <MenuTrigger onPress={onTriggerPress}>
                <TouchableOpacity
                  style={{
                    padding: R.unit.scale(5),
                    marginRight: R.unit.scale(4),
                    paddingHorizontal: R.unit.scale(10),
                    backgroundColor: R.color.secondaryColor2,
                  }}
                  onPress={() => setOpen(true)}
                  activeOpacity={0.9}>
                  <Icon
                    type={'MaterialCommunityIcons'}
                    name={'dots-horizontal'}
                    color={R.color.white}
                    size={20}
                  />
                </TouchableOpacity>
              </MenuTrigger>

              <MenuOptions optionsContainerStyle={styles.menuOptionContainer}>
                {menuOptions?.map((item, index) => {
                  return (
                    <MenuOption
                      style={{
                        backgroundColor:
                          index % 2 === 0
                            ? R.color.secondaryColor2
                            : R.color.mainColor,
                        ...styles.menuOption,
                      }}>
                      <Text
                        variant={'body4'}
                        font={'PoppinsMedium'}
                        color={R.color.white}
                        gutterBottom={2}
                        align={'center'}
                        transform={'none'}>
                        {item?.title}
                      </Text>
                    </MenuOption>
                  );
                })}
              </MenuOptions>
            </Menu>
            <TouchableOpacity
              style={{
                padding: R.unit.scale(5),
                backgroundColor: R.color.mainColor,
              }}
              activeOpacity={0.9}>
              <View style={R.styles.svgView}>
                <TrashIcon height={'90%'} width={'100%'} fill={R.color.white} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
export default EmployeeCard;

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
  menuOptionContainer: {
    padding: R.unit.scale(12),
    borderRadius: R.unit.scale(5),
    marginTop: R.unit.scale(40),
    width: '50%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  menuOption: {
    marginBottom: R.unit.scale(4),
    borderRadius: R.unit.scale(2),
    paddingVertical: R.unit.scale(10),
  },
});
