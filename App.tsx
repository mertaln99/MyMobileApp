import React from 'react';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {
  return (
    <Videw>
      <Text>Home</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  // background: {
  //   backgroundColor: '#f0abfc',
  //   flex: 1,
  // },
});
