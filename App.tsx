import { useState } from "react";
import { StyleSheet, SafeAreaView, View, Alert } from "react-native";

import MultipleChoiceQuestion from "./src/components/MultipleChoiceQuestion";
import TranslateTheSentenceQuestion from "./src/components/TranslateTheSentenceQuestion";

import data from "./src/data";
import { IMultipleChoice, ITranslateTheSentence } from "./src/types";

export default function App() {
  const [index, setIndex] = useState(0);

  const question = data[index];

  const handleCorrect = () => {
    setIndex((v) => v + 1);
  };

  const handleWrong = () => {
    Alert.alert("Incorrect");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {question.type === "MULTIPLE_CHOICE" && (
          <MultipleChoiceQuestion
            question={question as IMultipleChoice}
            onCorrect={handleCorrect}
            onWrong={handleWrong}
          />
        )}

        {question.type === "TRANSLATE_THE_SENTENCE" && (
          <TranslateTheSentenceQuestion
            question={question as ITranslateTheSentence}
            onCorrect={handleCorrect}
            onWrong={handleWrong}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
