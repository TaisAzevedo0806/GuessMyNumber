import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/success.png")} style={styles.image} />
      </View>
      <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    borderColor: Colors.primary800,
    borderRadius: 150,
    borderWidth: 3,
    height: 300,
    margin: 36,
    overflow: "hidden",
    width: 300,
  },
  rootContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
});
