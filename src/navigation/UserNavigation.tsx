import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import UsersDetail from '../screens/Users/UsersDetail';
import UsersList from '../screens/Users/UsersList';

const Stack = createStackNavigator();
function UserNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={UsersList} />
      <Stack.Screen name="Detail" component={UsersDetail} />
    </Stack.Navigator>
  );
}

export default UserNavigation;
