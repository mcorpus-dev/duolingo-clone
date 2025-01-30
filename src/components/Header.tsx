import { StyleSheet, View, Image, Text } from "react-native";

import ProgressBar from "./ProgressBar";

interface HeaderProps {
  progress: number;
  lives: number;
}

export default function Header({ progress, lives }: HeaderProps) {
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />

      <Image
        style={styles.heartIcon}
        source={require("../../assets/images/heart.png")}
        resizeMode="contain"
      />

      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  heartIcon: {
    width: 32,
    height: 32,
  },
  lives: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
