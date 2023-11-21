import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../components/Icon';

const TabMenu = () => {
  return (
    <View style={styles.tabBackground}>
      <Text style={styles.tabText}>BlindShot</Text>
      <TouchableOpacity style={styles.tabButton}>
      <Icon name="home" size={25} color="white" />
      </TouchableOpacity>
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
  tabButton: {
    position: "absolute",
    left: 15,
  }
});
