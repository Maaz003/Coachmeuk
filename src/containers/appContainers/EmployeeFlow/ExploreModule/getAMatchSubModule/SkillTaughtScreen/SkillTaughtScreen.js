import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import StudentGetAMatchBoiler from '@components/layout/StudentGetAMatchLayout/StudentGetAMatchBoiler';
import uuid from 'react-native-uuid';
import CheckBoxLine from '@components/common/CheckBoxLine';
import Divider from '@components/common/Divider';
import SelectionLine from '@components/common/SelecticonLine';

function SkillTaughtScreen(props) {
  const {navigation} = props;

  const [qualities, setQualities] = useState([
    {id: uuid.v4(), isChecked: false, title: 'Forhand'},
    {id: uuid.v4(), isChecked: false, title: 'Backhand'},
    {id: uuid.v4(), isChecked: false, title: 'Top Spin'},
    {id: uuid.v4(), isChecked: false, title: 'Serve'},
    {id: uuid.v4(), isChecked: false, title: 'Volley'},
    {id: uuid.v4(), isChecked: false, title: 'Drop Shot'},
    {id: uuid.v4(), isChecked: false, title: 'Lob'},
    {id: uuid.v4(), isChecked: false, title: 'Top Spin'},
    {id: uuid.v4(), isChecked: false, title: 'Underspin'},
    {id: uuid.v4(), isChecked: false, title: 'Stance'},
    {id: uuid.v4(), isChecked: false, title: 'Approach Shot'},
    {id: uuid.v4(), isChecked: false, title: 'Backhand Smash'},
    {id: uuid.v4(), isChecked: false, title: 'Backswing'},
    {id: uuid.v4(), isChecked: false, title: 'Big Serve'},
    {id: uuid.v4(), isChecked: false, title: 'Block'},
  ]);

  const [selected, setSelected] = useState(false);

  const checkBoxPress = id => {
    const updatedObj = qualities?.find(item => item.id === id);
    let checked = updatedObj.isChecked;
    updatedObj.isChecked = !checked;
    setQualities([...qualities]);
  };

  const submit = () => {
    navigation.navigate('Explore', {
      paramsData: null,
    });
  };

  const goBack = () => {
    navigation.goBack();
  };
  const selectAll = () => {
    setSelected(!selected);
    qualities.map(x => (x.isChecked = !selected));
  };

  return (
    <StudentGetAMatchBoiler
      onPressNextButton={submit}
      onPressBackButton={goBack}>
      <KeyboardAwareScrollView
        style={[R.styles.container, styles.mainLayout]}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={R.styles.contentView}>
          <Text
            variant={'body2'}
            font={'InterRegular'}
            color={R.color.gray}
            align={'center'}
            gutterBottom={8}
            transform={'none'}>
            6 out of 6
          </Text>
          <Text
            variant={'h2'}
            font={'Sequel551'}
            gutterBottom={24}
            color={R.color.black}
            align={'center'}
            transform={'none'}>
            Skill taught
          </Text>

          <SelectionLine
            onPress={selectAll}
            text={selected ? 'Unselect all' : 'Select all'}
            selected={selected}
            textColor={selected ? R.color.black : R.color.gray}
          />
          <Divider lineStyles={styles.dividerView} />

          {qualities.map(item => {
            return (
              <CheckBoxLine
                onPress={() => checkBoxPress(item.id)}
                text={item.title}
                selected={item.isChecked}
                textColor={item.isChecked ? R.color.blackShade4 : R.color.gray}
                containerStyles={styles.checkBoxLineContainer}
              />
            );
          })}
        </View>
      </KeyboardAwareScrollView>
    </StudentGetAMatchBoiler>
  );
}
export default SkillTaughtScreen;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
  },

  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  dividerView: {
    marginTop: R.unit.scale(24),
  },
  checkBoxLineContainer: {
    marginBottom: R.unit.scale(24),
  },
});
