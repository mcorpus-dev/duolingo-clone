import { StyleSheet, Pressable, Text } from "react-native";

interface WordOptionProps {
  text?: string;
  isSelected?: boolean;
  onPress?: () => void;
}

export default function WordOption({
  text,
  isSelected,
  onPress,
}: WordOptionProps) {
  return (
    <Pressable
      style={[
        styles.container,
        !text && styles.emptyContainer,
        isSelected && styles.selectedContainer,
      ]}
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
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
  },
  emptyContainer: {
    borderColor: "transparent",
  },
  selectedContainer: {
    backgroundColor: "lightgrey",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  selectedText: {
    color: "lightgrey",
  },
});
