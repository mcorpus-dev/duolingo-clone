import { StyleSheet, Pressable, Image, Text } from "react-native";

import { IMultipleChoiceOption } from "../types";

interface ImageOptionProps {
  option: IMultipleChoiceOption;
  isSelected?: boolean;
  onPress: () => void;
}

export default function ImageOption({
  option,
  isSelected,
  onPress,
}: ImageOptionProps) {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={onPress}
    >
      <Image
        style={styles.image}
        source={{ uri: option.image }}
        resizeMode="contain"
      />
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {option.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: "48%",
    borderColor: "lightgrey",
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 8,
    padding: 12,
  },
  selectedContainer: {
    backgroundColor: "#ddf4fe",
    borderColor: "#81d5fe",
  },
  image: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  selectedText: {
    color: "#40bef7",
  },
});
