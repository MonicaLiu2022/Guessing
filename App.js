import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Image, Text } from 'react-native';

export default function App() {
  const [text, setText] = useState(0);
  const [count, setCount] = useState(1);
  const [Result, setResult] = useState('Guess a number between 1-100');
  const [random, setRandom] = useState(0);

  if (random == 0) {
    setRandom(Math.floor(Math.random() * 100) + 1)
  }

  const buttonPressed = () => {
    setCount(count + 1)
    if (parseInt(text) > random) {
      setResult('Your guess ' + text + ' is too high')
    }
    if (parseInt(text) < random) {
      setResult('Your guess ' + text + ' is too low')
    }
    if (parseInt(text) == random) {
      Alert.alert('You guessed the number in ' + count + ' guesses')
    }
  };

  return (
    <View style={styles.container}>
      <Text>{Result}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
        keyboardType="numeric"
      />
      <Button
        onPress={buttonPressed}
        title="MAKE GUESS"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});