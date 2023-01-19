import {View, Pressable} from 'react-native';
import React, {FC} from 'react';
import {User} from '../interfaces/user.interface';
import {StyleSheet} from 'react-native';
import {Colors} from '../const/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MyText from './ui/MyText';

type Props = {
  user: User;
  onPress: () => void;
};

const CardUser: FC<Props> = ({user: {phone, name}, onPress}) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed
          ? {...styles.container, ...styles.containerPressed}
          : {...styles.container, ...styles.containerNoPressed}
      }
      onPress={onPress}>
      {({pressed}) => (
        <>
          <Icon
            name="person"
            size={30}
            color={pressed ? 'white' : Colors.PRIMARY}
          />
          <View style={styles.containerInformation}>
            <MyText
              style={
                (styles.text,
                pressed ? styles.textPressed : styles.textNoPressed)
              }
              text={name}
            />
            <MyText
              style={
                (styles.text,
                pressed ? styles.textPressed : styles.textNoPressed)
              }
              text={phone}
            />
          </View>
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '40%',
    margin: 10,
    borderRadius: 10,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  containerPressed: {
    backgroundColor: Colors.PRIMARY,
    borderColor: 'white',
    borderWidth: 1,
  },
  containerNoPressed: {
    backgroundColor: Colors.SECOND,
  },
  containerInformation: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
  textPressed: {
    color: 'white',
  },
  textNoPressed: {},
});

export default CardUser;
