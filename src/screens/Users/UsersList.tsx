import {View, FlatList, StyleSheet} from 'react-native';
import React, {FC, useEffect} from 'react';
import CardUser from '../../components/CardUser';
import {Colors} from '../../const/colors';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/UserNavigation';
import {User} from '../../interfaces/user.interface';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {fetchUsers} from '../../services/user.service';

interface Props extends StackScreenProps<RootStackParams, 'List'> {}

const UsersList: FC<Props> = ({navigation}) => {
  const {users, isLoading, error} = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && !users.length && !error) {
      dispatch(fetchUsers());
    }
  }, [users, isLoading, error, dispatch]);

  const userSelected = (user: User) => {
    navigation.navigate('Detail', user);
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2} // set number of columns
        columnWrapperStyle={styles.row} // space them out evenly
        data={users}
        renderItem={item => (
          <CardUser user={item.item} onPress={() => userSelected(item.item)} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    paddingTop: 30,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default UsersList;
