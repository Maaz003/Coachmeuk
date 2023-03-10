import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import StudentGetAMatchBoiler from '@components/layout/StudentGetAMatchLayout/StudentGetAMatchBoiler';
import CheckBoxLine from '@components/common/CheckBoxLine';
import uuid from 'react-native-uuid';
import Divider from '@components/common/Divider';
import SelectionLine from '@components/common/SelecticonLine';

function CoachQualitiesScreen(props) {
  const {navigation} = props;

  const [selected, setSelected] = useState(false);

  const [qualities, setQualities] = useState([
    {id: uuid.v4(), isChecked: false, title: 'Friendly to kids'},
    {id: uuid.v4(), isChecked: false, title: 'Discipline'},
    {id: uuid.v4(), isChecked: false, title: 'Competitive'},
    {id: uuid.v4(), isChecked: false, title: 'Caring'},
    {id: uuid.v4(), isChecked: false, title: 'Supportive'},
    {id: uuid.v4(), isChecked: false, title: 'Trustworthy'},
    {id: uuid.v4(), isChecked: false, title: 'Motivator'},
    {id: uuid.v4(), isChecked: false, title: 'Passionate'},
    {id: uuid.v4(), isChecked: false, title: 'Good Listener'},
    {id: uuid.v4(), isChecked: false, title: 'Energetic'},
    {id: uuid.v4(), isChecked: false, title: 'Knowledgable'},
    {id: uuid.v4(), isChecked: false, title: 'Good Communicator'},
    {id: uuid.v4(), isChecked: false, title: 'Skillful'},
    {id: uuid.v4(), isChecked: false, title: 'Proactive'},
  ]);

  const checkBoxPress = id => {
    const updatedObj = qualities?.find(item => item.id === id);
    let checked = updatedObj.isChecked;
    updatedObj.isChecked = !checked;
    setQualities([...qualities]);
  };

  const submit = () => {
    navigation.navigate('SkillTaughtScreen', {
      paramsData: {},
    });
  };

  const goBack = () => {
    navigation.goBack();
  };

  const checkAll = () => {
    setSelected(!selected);
    qualities.map(x => (x.isChecked = !selected));
  };

  return (
    <StudentGetAMatchBoiler
      onPressNextButton={submit}
      onPressBackButton={goBack}>
      <ScrollView
        style={[R.styles.container, styles.mainLayout]}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={R.styles.contentView}>
          <Text
            variant={'body3'}
            font={'Sequel451'}
            color={R.color.gray}
            gutterBottom={8}
            align={'center'}
            transform={'none'}>
            5 out of 6
          </Text>
          <Text
            variant={'h2'}
            font={'Sequel451'}
            gutterBottom={24}
            color={R.color.black}
            align={'center'}
            transform={'none'}>
            Coach qualities
          </Text>
          <SelectionLine
            onPress={() => checkAll()}
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
      </ScrollView>
    </StudentGetAMatchBoiler>
  );
}
export default CoachQualitiesScreen;

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
