import {View, StyleSheet, Dimensions, Text} from 'react-native';
import React, {FC, useContext, useEffect, useState} from 'react';

import Geolocation from '@react-native-community/geolocation';
import {PermissionsContext} from '../context/PermissionsContext';
import MapView, {Marker} from 'react-native-maps';

type Coords = {
  latitude?: number;
  longitude?: number;
};

type Props = Coords;

const GoogleMap: FC<Props> = ({latitude, longitude}) => {
  const {permissions} = useContext(PermissionsContext);

  const [coords, setCoords] = useState<null | Coords>(null);

  useEffect(() => {
    if (latitude && longitude) {
      setCoords({latitude: latitude, longitude: longitude});
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (
      permissions.locationStatus === 'granted' &&
      (!coords || !coords.latitude || !coords.longitude)
    ) {
      Geolocation.getCurrentPosition(info => {
        const {
          coords: {latitude: lat, longitude: lg},
        } = info;
        setCoords({latitude: lat, longitude: lg});
      });
    }
  }, [permissions, coords]);
  return (
    <View style={styles.container}>
      {coords?.latitude && coords.longitude ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}>
          <Marker
            title="You are here"
            coordinate={{
              latitude: coords.latitude,
              longitude: coords.longitude,
            }}
          />
        </MapView>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
  },
});
export default GoogleMap;
