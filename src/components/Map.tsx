import {View, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {PermissionsContext} from '../context/PermissionsContext';
import NoPremissions from './NoPremissions';
import GoogleMap from './GoogleMap';

const Map = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);
  return (
    <View style={styles.containerMap}>
      {permissions.locationStatus !== 'granted' ? (
        <NoPremissions onPress={askLocationPermission} />
      ) : (
        <GoogleMap />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerMap: {
    flex: 1,
    borderRadius: 20,
    marginTop: -20,
    backgroundColor: 'white',
  },
});
export default Map;
