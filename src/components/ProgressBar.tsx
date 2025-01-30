import { StyleSheet, View } from "react-native";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]}>
        <View style={styles.highlight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 28,
    backgroundColor: "lightgrey",
    borderRadius: 14,
    overflow: "hidden",
  },
  progress: {
    flex: 1,
    backgroundColor: "#fac800",
    alignItems: "center",
  },
  highlight: {
    width: "90%",
    height: 8,
    backgroundColor: "#fad131",
    borderRadius: 4,
    marginTop: 8,
  },
});
