import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.box1Style}>Child #1</Text>
      <Text style={styles.box2Style}>Child #2</Text>
      <Text style={styles.box3Style}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    height: 200,
    justifyContent: 'space-between'
  },
  box1Style: {
    borderWidth: 3,
    borderColor: 'red',
    height: 50,
    backgroundColor: 'red'
  },
  box2Style: {
    borderWidth: 3,
    borderColor: 'red',
    height: 50,
    backgroundColor: 'green',
    position: 'absolute',
    left: 170,
    top: 50
  },
  box3Style: {
    borderWidth: 3,
    borderColor: 'red',
    height: 50,
    backgroundColor: 'blue'
  }
});
export default BoxScreen;
