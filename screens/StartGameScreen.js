import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({ onPickedNumber }) {
  const [inputValue, setInputValue] = useState("");

  function inputHandler(enteredText) {
    setInputValue(enteredText);
  }

  function resetInputHandler() {
    setInputValue("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(inputValue);

    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={inputValue}
        onChangeText={inputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
  buttonsContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    justifyContent: "center",
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  numberInput: {
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontSize: 32,
    height: 50,
    marginVertical: 8,
    textAlign: "center",
    width: 50,
  },
});
