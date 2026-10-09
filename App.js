import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let currentScreen = userNumber ? <GameScreen /> : <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {currentScreen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    opacity: 0.15,
  },
  rootScreen: {
    flex: 1,
  },
});
