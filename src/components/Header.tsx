import { StyleSheet, View, Text } from "react-native";

import ProgressBar from "./ProgressBar";

interface HeaderProps {
  progress: number;
}

export default function Header({ progress }: HeaderProps) {
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
