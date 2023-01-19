import {View, FlatList, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {USERS_MOCK} from '../../mock/user.mock';
import CardUser from '../../components/ui/CardUser';
import {Colors} from '../../const/colors';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/UserNavigation';
import {User} from '../../interfaces/user.interface';

interface Props extends StackScreenProps<RootStackParams, 'List'> {}

const UsersList: FC<Props> = ({navigation}) => {
  const userSelected = (user: User) => {
    navigation.navigate('Detail', user);
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2} // set number of columns
        columnWrapperStyle={styles.row} // space them out evenly
        data={USERS_MOCK}
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
