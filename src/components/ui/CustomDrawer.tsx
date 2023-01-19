import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../const/colors';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import MyText from './MyText';
import {StyleSheet} from 'react-native';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: Colors.PRIMARY,
        }}>
        <ImageBackground
          source={require('../../assets/menu-gb.jpg')}
          style={styles.imgBg}>
          <Image
            style={styles.avatar}
            source={require('../../assets/owl.jpeg')}
          />
          <MyText style={styles.name} text="Daniel Ortega" />
          <View style={styles.containerInformation}>
            <MyText style={styles.age} text="28 years" />
            <Icon size={20} name="gift" color={Colors.SECOND} />
          </View>
        </ImageBackground>
        <View style={styles.containerDrawerContentScroll}>
          <DrawerItemList {...props}>CustomDrawer</DrawerItemList>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {padding: 30, marginTop: -10},
  avatar: {borderRadius: 50, height: 80, width: 80, marginBottom: 20},
  name: {color: Colors.SECOND, fontSize: 20},
  containerInformation: {flexDirection: 'row', alignItems: 'center'},
  age: {color: Colors.SECOND, fontSize: 12, marginRight: 20},
  containerDrawerContentScroll: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
});

export default CustomDrawer;
