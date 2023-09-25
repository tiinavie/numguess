import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App(props) {
  const [number, setNumber] = useState();
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');
  const [guessCount, setGuessCount] = useState(1);

  const setRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
    console.log({randomNumber});
    setGuess('');
    setResult('');
    setGuessCount(1);
  };

  const checkRandomNumber = () => {
    setGuessCount(guessCount + 1);

    if (guess === number) {
      Alert.alert("The answer is " + number + "!\nYou guessed it with " + guessCount + " tries.");
    }
    else if (guess < number) {
      setResult("Your guess was too low.");
    }
    else if (guess > number) {
      setResult("Your guess was too high.");
    }
    setGuess('');
  };

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <Button title="new game" onPress={setRandomNumber} />
      <TextInput 
      style={styles.input}
      placeholder="your guess"
      value={guess}
      keyboardType="numeric"
      onChangeText={(e) => {
        setGuess(Number.parseInt(e));
      }}
      />
      <View style={styles.buttons}>
        <Button title='Make a guess' onPress={checkRandomNumber} />
      </View>
      <View>
        <Text style={styles.result}>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  input: {
    borderWidth: 1,
    borderColor: "grey",
    width: 80,
    margin: 5,
    paddingHorizontal: 3,
  },

  result: {
    fontSize: 20,
    textAlign: "center",
  }

});
