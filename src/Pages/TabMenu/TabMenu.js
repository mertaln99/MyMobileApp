import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from '../../components/Icon';

const TabMenu = () => {
  return (
    <View style={styles.tabBackground}>
      <Text style={styles.tabText}>BlindShot</Text>
      <Icon name="home" size={25} color="white" />
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
