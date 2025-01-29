import { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Title from "./Title";
import Button from "./Button";
import WordOption from "./WordOption";

import { IFillInTheBlank } from "../types";

interface FillInTheBlankQuestionProps {
  question: IFillInTheBlank;
  onCorrect: () => void;
  onWrong: () => void;
}

export default function FillInTheBlankQuestion({
  question,
  onCorrect,
  onWrong,
}: FillInTheBlankQuestionProps) {
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
      <Title text="Fill in the blank" />

      <View style={styles.body}>
        <View style={styles.detailsContainer}>
          <Image
            style={styles.actor}
            source={require("../../assets/images/zari.png")}
            resizeMode="contain"
          />
          <View style={styles.speechContainer}>
            <Text style={styles.speech}>{question.sentence}</Text>
          </View>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.text}>{question.preText}</Text>
          <View style={[styles.blank, selected && { width: "auto" }]}>
            {selected ? (
              <WordOption text={selected} onPress={() => setSelected("")} />
            ) : (
              <WordOption />
            )}
          </View>
          <Text style={styles.text}>{question.postText}</Text>
        </View>

        <View style={styles.optionsContainer}>
          {question.options.map((option) => (
            <WordOption
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
    gap: 12,
  },
  body: {
    flex: 1,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  actor: {
    width: "30%",
    aspectRatio: 1 / 2,
  },
  speechContainer: {
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    flexShrink: 1,
  },
  speech: {
    fontSize: 18,
    fontWeight: "500",
  },
  questionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 12,
    flexWrap: "wrap",
    alignContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  blank: {
    borderColor: "lightgrey",
    borderBottomWidth: 2,
    width: 120,
    paddingBottom: 4,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignContent: "center",
    gap: 12,
  },
});
