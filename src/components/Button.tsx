import { StyleSheet, Pressable, PressableProps, Text } from "react-native";

interface ButtonProps extends PressableProps {
  text: string;
}

export default function Button({ text, ...rest }: ButtonProps) {
  return (
    <Pressable
      style={[styles.container, rest.disabled && styles.disabledContainer]}
      {...rest}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: "#58cc02",
    borderColor: "#57a600",
    borderBottomWidth: 4,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledContainer: {
    backgroundColor: "lightgrey",
    borderColor: "grey",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textDecorationLine: "underline",
    letterSpacing: 1,
  },
});
