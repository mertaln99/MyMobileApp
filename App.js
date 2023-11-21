import React from 'react';
import {StyleSheet, View} from 'react-native';
import MainMenu from './src/Pages/MainMenu/MainMenu';
import TabMenu from './src/Pages/TabMenu/TabMenu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <View style={styles.background}>
    //     <TabMenu />
    //     <MainMenu />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainMenu" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f0abfc',
    flex: 1,
  },
});
