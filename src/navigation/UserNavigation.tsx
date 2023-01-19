import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {User} from '../interfaces/user.interface';
import UsersDetail from '../screens/Users/UsersDetail';
import UsersList from '../screens/Users/UsersList';
import {Colors} from '../const/colors';

export type RootStackParams = {
  List: undefined;
  Detail: User;
};

const Stack = createStackNavigator<RootStackParams>();
function UserNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={UsersList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={UsersDetail}
        options={{
          headerStyle: {
            backgroundColor: Colors.PRIMARY,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default UserNavigation;
