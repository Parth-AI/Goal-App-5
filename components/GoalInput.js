import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import * as Notifications from 'expo-notifications'

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const arr = ['hi']

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    console.log(arr)
    arr.push(enteredGoal)
    console.log(arr)
    setEnteredGoal('');
    triggerNotificationsHandler();
  };

  const triggerNotificationsHandler = () => {
    Notifications.scheduleNotificationAsync({
      content:{
        title: "New Goal Added",
        body: arr
      },
      trigger:{
        seconds: 5,
      }
    })
  }

  return (
    <View style = {{backgroundColor:'#222222'}}>
      <Modal style = {{backgroundColor:'#222222'}} visible={props.visible} animationType="slide" >
      <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="CANCEL" color="red" onPress={props.onCancel} />
            </View>
            <View style={styles.button}>
              <Button title="ADD" onPress={addGoalHandler} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#242c40"
  },
  input: {
    width: '80%',
    borderColor: '#ffffff',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    borderRadius: 5
  },
  button: {
    width: '40%',
    borderRadius: 5
  }
});

export default GoalInput;
