import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 45 },
    { name: 'Friend #3', age: 56 },
    { name: 'Friend #4', age: 60 },
    { name: 'Friend #5', age: 49 },
    { name: 'Friend #6', age: 29 },
    { name: 'Friend #7', age: 35 },
    { name: 'Friend #8', age: 49 },
    { name: 'Friend #9', age: 55 }
  ];
  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginLeft: 40
  }
});

export default ListScreen;
