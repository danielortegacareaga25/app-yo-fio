import {View, ImageBackground, Image} from 'react-native';
import React, {FC} from 'react';
import {User} from '../interfaces/user.interface';
import {StyleSheet} from 'react-native';
import {Colors} from '../const/colors';
import MyText from './ui/MyText';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  user: User;
};

const UserDetailHeader: FC<Props> = ({
  user: {
    name,
    username,
    email,
    phone,
    company: {name: nameCompany},
    address: {
      street,
      geo: {lat, lng},
    },
  },
}) => {
  return (
    <ImageBackground
      source={require('../assets/menu-gb.jpg')}
      style={styles.imgBg}>
      <View style={styles.containerInformation}>
        <Image style={styles.avatar} source={require('../assets/owl.jpeg')} />
        <View style={styles.containerDescription}>
          <MyText style={styles.name} text={`${name} (${username})`} />
          <MyText style={styles.email} text={email} />
          <View style={styles.containerInfo}>
            <Icon size={20} name="call" color={Colors.SECOND} />
            <MyText style={styles.address} text={phone} />
          </View>
          <View style={styles.containerInfo}>
            <Icon size={20} name="briefcase" color={Colors.SECOND} />
            <MyText style={styles.address} text={nameCompany} />
          </View>
          <View style={styles.containerInfo}>
            <Icon size={20} name="home" color={Colors.SECOND} />
            <MyText style={styles.address} text={street} />
          </View>
          <View style={styles.containerInfo}>
            <Icon size={20} name="globe" color={Colors.SECOND} />
            <MyText style={styles.address} text={`lat:${lat} lng:${lng}`} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerInformation: {
    flexDirection: 'row',
  },
  imgBg: {padding: 40},
  avatar: {borderRadius: 50, height: 100, width: 100, marginBottom: 20},
  name: {color: Colors.SECOND, fontSize: 20, marginBottom: 5},
  containerDescription: {
    marginLeft: 15,
  },
  email: {color: Colors.SECOND, fontSize: 12, marginBottom: 10},
  containerInfo: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  address: {
    color: Colors.SECOND,
    fontSize: 15,
    marginLeft: 10,
  },
});
export default UserDetailHeader;
