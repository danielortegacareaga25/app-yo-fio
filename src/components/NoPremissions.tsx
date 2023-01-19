import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import React, {FC} from 'react';
import MyText from './ui/MyText';
import {Colors} from '../const/colors';

type Props = {
  onPress: () => void;
};

const NoPremissions: FC<Props> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <MyText text="To use this section you need to give permission of location" />
      <Pressable
        onPress={onPress}
        style={({pressed}) =>
          pressed
            ? {...styles.buttonPermissions, ...styles.buttonPermissionsPressed}
            : {
                ...styles.buttonPermissions,
                ...styles.buttonPermissionsNoPressed,
              }
        }>
        {({pressed}) => (
          <MyText
            style={pressed ? styles.textPressed : styles.textNoPressed}
            text="Settings"
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPermissions: {
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonPermissionsNoPressed: {
    backgroundColor: Colors.PRIMARY,
  },
  buttonPermissionsPressed: {
    backgroundColor: 'white',
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
  },
  textNoPressed: {
    color: 'white',
  },
  textPressed: {
    color: Colors.PRIMARY,
  },
});

export default NoPremissions;
