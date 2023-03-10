import React from 'react';
import {StyleSheet, View} from 'react-native';
import R from '@components/utils/R';
import {trainingLocations} from '@components/constants';
import TrainingLocations from './TrainingLocations';

function LocationsDisplay(props) {
  return (
    <View style={styles.mainLayout}>
      <View style={styles.mapContainer}></View>

      {trainingLocations?.map((item, index) => {
        return <TrainingLocations key={index} item={item} />;
      })}
    </View>
  );
}
export default LocationsDisplay;

const styles = StyleSheet.create({
  mapContainer: {
    borderRadius: R.unit.scale(10),
    overflow: 'hidden',
    height: R.unit.scale(180),
    width: '100%',
    marginBottom: R.unit.scale(24),
  },
  mapView: {
    height: '100%',
    width: '100%',
  },
});
