import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import R from '@components/utils/R';
import Icon from './Icon';

function SelectIcon(props) {
  const {cardColor, alreadySelected, onPress, id} = props;
  const [selected, setSelected] = useState(false);

  const checkedBox = () => {
    // setSelected(!selected);
    onPress(id);
  };

  return (
    <TouchableOpacity onPress={checkedBox}>
      {selected || alreadySelected ? (
        <View style={styles.unCheckedBox}>
         <View style={[styles.selectLine]} />  
        </View>
      ) : (
        <View style={styles.checkedBox}> 
        <View style={[styles.selectLine]} />
        </View>
      )}
    </TouchableOpacity>
  );
}
export default SelectIcon;

const styles = ScaledSheet.create({
  checkedBox: {
    backgroundColor: 'white',
    height: R.unit.scale(22),
    width: R.unit.scale(22),
    borderRadius: R.unit.scale(6),
    borderColor: R.color.gray4,
    borderWidth: R.unit.scale(1),
  },
  unCheckedBox: {
    backgroundColor: 'black',
    height: R.unit.scale(22),
    width: R.unit.scale(22),
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: R.unit.scale(6),
    borderColor: R.color.black,
    borderWidth: R.unit.scale(0.44),
  },

selectLine: {
  height: R.unit.scale(2),
  width: '50%',
  marginBottom: R.unit.scale(20),
  marginTop:R.unit.scale(20),
  backgroundColor:'white'
},
  
});
