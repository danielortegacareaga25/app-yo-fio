import {View} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/UserNavigation';
import {StyleSheet} from 'react-native';
import UserDetailHeader from '../../components/UserDetailHeader';
import Map from '../../components/Map';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const UsersDetail: FC<Props> = ({route: {params}}) => {
  return (
    <View style={styles.container}>
      <UserDetailHeader user={params} />
      <View style={styles.containerMap}>
        <Map
          latitude={Number(params.address.geo.lat)}
          longitude={Number(params.address.geo.lng)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerMap: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
});

export default UsersDetail;
