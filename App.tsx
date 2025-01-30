import { useState } from "react";
import { StyleSheet, SafeAreaView, View, Alert } from "react-native";

import Header from "./src/components/Header";
import MultipleChoiceQuestion from "./src/components/MultipleChoiceQuestion";
import TranslateTheSentenceQuestion from "./src/components/TranslateTheSentenceQuestion";
import FillInTheBlankQuestion from "./src/components/FillInTheBlankQuestion";
import FlipTheSentenceQuestion from "./src/components/FlipTheSentenceQuestion";

import data from "./src/data";
import {
  IMultipleChoice,
  ITranslateTheSentence,
  IFillInTheBlank,
  IFlipTheSentence,
} from "./src/types";

export default function App() {
  const [index, setIndex] = useState(0);
  const [lives, setLives] = useState(5);

  const question = data[index];
  const progress = ((index + 1) / data.length) * 100;

  const handleCorrect = () => {
    setIndex((v) => v + 1);
  };

  const handleWrong = () => {
    setLives((v) => v - 1);
    Alert.alert("Incorrect");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header progress={progress} lives={lives} />

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

        {question.type === "FILL_IN_THE_BLANK" && (
          <FillInTheBlankQuestion
            question={question as IFillInTheBlank}
            onCorrect={handleCorrect}
            onWrong={handleWrong}
          />
        )}

        {question.type === "FLIP_THE_SENTENCE" && (
          <FlipTheSentenceQuestion
            question={question as IFlipTheSentence}
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
    gap: 12,
  },
});
