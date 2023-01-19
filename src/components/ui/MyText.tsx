import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import React, {FC} from 'react';

type Props = {
  text: string;
  style?: StyleProp<TextStyle> | Object;
};

const MyText: FC<Props> = ({text, style = {}}) => {
  return <Text style={{...styles.text, ...style}}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Arial',
  },
});

export default MyText;
