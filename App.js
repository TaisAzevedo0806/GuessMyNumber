import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/Colors";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let currentScreen = userNumber ? (
    gameIsOver ? (
      <GameOverScreen />
    ) : (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    )
  ) : (
    <StartGameScreen onPickedNumber={pickedNumberHandler} />
  );

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <View style={styles.rootScreen}>
          <Image
            source={require("./assets/images/background.png")}
            style={[StyleSheet.absoluteFill, styles.backgroundImage]}
          ></Image>
          <SafeAreaView style={styles.rootScreen}>{currentScreen}</SafeAreaView>
        </View>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    opacity: 0.15,
    height: "100%",
    resizeMode: "stretch",
    transform: [{ scaleX: 2 }],
    width: "100%",
  },
  rootScreen: {
    flex: 1,
  },
});
