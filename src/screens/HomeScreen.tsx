import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Map from '../components/Map';
import Header from '../components/ui/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
