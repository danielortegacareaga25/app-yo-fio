import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {PermissionsProvider} from './src/context/PermissionsContext';
import SplashScreen from 'react-native-splash-screen';
const AppState = ({children}: any) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

export const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
      <AppState>
        <View style={styles.container}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </View>
      </AppState>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
