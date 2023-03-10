/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CustomDrawer from '../components/ui/CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../const/colors';
import UsersScreen from '../screens/Users/UsersScreen';

export type RootDrawerParams = {
  Home: undefined;
  Users: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

const Navigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: Colors.PRIMARY,
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {marginLeft: -20, fontFamily: 'Arial', fontSize: 15},
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="home-outline" size={20} color={color} />
          ),
        }}
        // options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Users"
        component={UsersScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="person-outline" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Navigation;
