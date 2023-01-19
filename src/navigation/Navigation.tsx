import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import UsersScreen from '../screens/Users/UsersScreen';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Users"
        component={UsersScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Navigation;
