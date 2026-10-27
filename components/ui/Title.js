import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    borderColor: Colors.accent500,
    borderWidth: 2,
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
    fontSize: 24,
    padding: 12,
    textAlign: "center",
  },
});
