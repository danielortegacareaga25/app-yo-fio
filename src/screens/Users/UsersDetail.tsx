import {View, Text, ImageBackground, Image} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/UserNavigation';
import {StyleSheet} from 'react-native';
import MyText from '../../components/ui/MyText';

import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../const/colors';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const UsersDetail: FC<Props> = ({
  route: {
    params: {
      name,
      email,
      address: {street},
    },
  },
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/menu-gb.jpg')}
        style={styles.imgBg}>
        <View style={styles.containerInformation}>
          <Image
            style={styles.avatar}
            source={require('../../assets/owl.jpeg')}
          />
          <View style={styles.containerDescription}>
            <MyText style={styles.name} text={name} />
            <MyText style={styles.email} text={email} />
            <View style={styles.containerAdreess}>
              <Icon size={20} name="location" color={Colors.SECOND} />
              <MyText style={styles.address} text={street} />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.containerMap} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInformation: {
    flexDirection: 'row',
  },
  imgBg: {padding: 40},
  avatar: {borderRadius: 50, height: 100, width: 100, marginBottom: 20},
  name: {color: Colors.SECOND, fontSize: 20},
  containerDescription: {
    marginLeft: 15,
  },
  email: {color: Colors.SECOND, fontSize: 12},
  containerAdreess: {
    flexDirection: 'row',
  },
  address: {
    color: Colors.SECOND,
    fontSize: 15,
    marginLeft: 10,
  },
  containerMap: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: -20,
  },
});

export default UsersDetail;
