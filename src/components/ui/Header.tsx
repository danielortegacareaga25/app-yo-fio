import {View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../const/colors';
import MyText from './MyText';
import {useDateTime} from '../../hooks/useDateTime';

const Header = () => {
  const {dateShow, hourShow} = useDateTime();

  return (
    <View style={styles.container}>
      <Icon name="rocket" size={30} color={Colors.SECOND} />
      <MyText text={dateShow} style={styles.textDate} />
      <MyText text={hourShow} style={styles.textHour} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDate: {
    color: Colors.SECOND,
    fontSize: 20,
  },
  textHour: {
    color: Colors.SECOND,
    fontSize: 60,
    fontWeight: 'bold',
  },
});
export default Header;
