import {View, StyleSheet} from 'react-native';
import React, {FC, useContext} from 'react';
import {PermissionsContext} from '../context/PermissionsContext';
import NoPremissions from './NoPremissions';
import GoogleMap from './GoogleMap';

type Props = {
  latitude?: number;
  longitude?: number;
};

const Map: FC<Props> = props => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);
  return (
    <View style={styles.containerMap}>
      {permissions.locationStatus !== 'granted' ? (
        <NoPremissions onPress={askLocationPermission} />
      ) : (
        <GoogleMap latitude={props.latitude} longitude={props.longitude} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerMap: {
    flex: 1,
    overflow: 'hidden',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
    backgroundColor: 'white',
  },
});
export default Map;
