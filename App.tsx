import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainMenu from './src/MainMenu/MainMenu';
import TabMenu from './src/TabMenu/TabMenu';

const App = () => {
  return (
    <View style={styles.background}>
      <TabMenu />
      <MainMenu/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0abfc",
    flex: 1,
  }
});
