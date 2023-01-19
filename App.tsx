import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

export const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
