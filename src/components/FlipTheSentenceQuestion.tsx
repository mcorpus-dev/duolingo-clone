import { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Title from "./Title";
import Button from "./Button";
import SentenceOption from "./SentenceOption";

import { IFlipTheSentence } from "../types";

interface FlipTheSentenceQuestionProps {
  question: IFlipTheSentence;
  onCorrect: () => void;
  onWrong: () => void;
}

export default function FlipTheSentenceQuestion({
  question,
  onCorrect,
  onWrong,
}: FlipTheSentenceQuestionProps) {
  const [selected, setSelected] = useState("");

  const handleCheck = () => {
    if (selected === question.answer) {
      onCorrect();
    } else {
      onWrong();
    }
    setSelected("");
  };

  return (
    <View style={styles.container}>
      <Title text="Flip the sentence" />

      <View style={styles.body}>
        <View style={styles.detailsContainer}>
          <Image
            style={styles.actor}
            source={require("../../assets/images/vikram.png")}
            resizeMode="contain"
          />
          <View style={styles.speechContainer}>
            <Text style={styles.speech}>{question.sentence}</Text>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          {question.options.map((option) => (
            <SentenceOption
              key={option}
              text={option}
              isSelected={option === selected}
              onPress={() => setSelected(option)}
            />
          ))}
        </View>
      </View>

      <Button text="Check" disabled={!selected} onPress={handleCheck} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  body: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  actor: {
    width: "40%",
    aspectRatio: 1,
  },
  speechContainer: {
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
  },
  speech: {
    fontSize: 18,
    fontWeight: "500",
  },
  optionsContainer: {
    flex: 1,
    gap: 12,
    justifyContent: "center",
  },
});
