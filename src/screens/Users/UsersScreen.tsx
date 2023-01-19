import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {USERS_MOCK} from '../../mock/user.mock';
import CardUser from '../../components/ui/CardUser';
import {Colors} from '../../const/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const UsersScreen = () => {
  const userSelected = (id: number) => {
    console.log('id', id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2} // set number of columns
        columnWrapperStyle={styles.row} // space them out evenly
        data={USERS_MOCK}
        renderItem={item => (
          <CardUser user={item.item} onPress={userSelected} />
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

export default UsersScreen;
