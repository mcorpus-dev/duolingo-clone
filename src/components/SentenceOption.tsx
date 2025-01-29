import { StyleSheet, Pressable, Text } from "react-native";

interface SentenceOptionProps {
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

export default function SentenceOption({
  text,
  isSelected,
  onPress,
}: SentenceOptionProps) {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={onPress}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    justifyContent: "center",
  },
  selectedContainer: {
    backgroundColor: "#ddf4fe",
    borderColor: "#81d5fe",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  selectedText: {
    color: "#40bef7",
  },
});
