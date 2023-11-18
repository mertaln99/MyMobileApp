import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../components/Icon';

const TabMenu = () => {
  return (
    <View style={styles.tabBackground}>
      <TouchableOpacity style={styles.menuIcon}>
        <Icon name="home" size={25} color="white" />
      </TouchableOpacity>
      <Text style={styles.tabText}>BlindShot</Text>
    </View>
  );
};

export default TabMenu;

const styles = StyleSheet.create({
  tabBackground: {
    height: 50,
    backgroundColor: '#4a044e',
    flexDirection: 'row',
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
  menuIcon: {
    position: "absolute",
    left: 15,
  },
});
