import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const myName = 'Young Won';
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React Native!</Text>
      <Text style={styles.subHeadertext}>My name is {myName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderText: {
    fontSize: 20
  }
});

export default ComponentsScreen;
