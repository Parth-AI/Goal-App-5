import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Icon } from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view'

//renderItem = data => (< leftElement = {<Icon name = "book" type = "font-awesome" color = "#696969" />}title = {data.item.title} titleStyle = {{color: 'black', fontWeight: 'bold'}} bottomDivisor />)

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#C21850',
    borderColor: 'black',
    borderRadius:5,
  }
});

export default GoalItem;

//onPress={props.onDelete.bind(this, props.id)}
