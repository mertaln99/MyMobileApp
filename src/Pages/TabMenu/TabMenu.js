import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TabMenu = () => {
  return (
    <View style={styles.tabBackground}>
      <Text style={styles.tabText}>BlindShot</Text>
    </View>
  );
};

export default TabMenu;

const styles = StyleSheet.create({
  tabBackground: {
    height: 50,
    backgroundColor: '#4a044e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 1.2,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: '#fff',
  },
});
