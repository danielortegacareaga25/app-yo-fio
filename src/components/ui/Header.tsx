import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../const/colors';
import MyText from './MyText';

const Header = () => {
  return (
    <View style={styles.container}>
      <MyText text="20/30" style={styles.textDate} />
      <MyText text="10:30" style={styles.textHour} />
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
