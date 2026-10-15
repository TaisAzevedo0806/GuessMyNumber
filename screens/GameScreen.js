import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(exclude) {
  const randomNumber =
    Math.floor(Math.random() * (maxBoundary - minBoundary)) + minBoundary;

  if (randomNumber === exclude) {
    return generateRandomBetween(exclude);
  } else {
    return randomNumber;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function makeNewGuess(direction) {
    // direction => 'lower' or 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont'lie!", "You konw this is wrong...", [
        { text: "Ok", style: "cancel" },
      ]);
      return;
    }

    direction === "lower"
      ? (maxBoundary = currentGuess)
      : (minBoundary = currentGuess + 1);
    const newGuess = generateRandomBetween(currentGuess);
    setCurrentGuess(newGuess);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={makeNewGuess.bind(this, "greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={makeNewGuess.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
