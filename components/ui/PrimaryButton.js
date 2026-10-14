import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    // Used just for iOS, because android_ripple is used for Android
    opacity: 0.75,
  },
});
