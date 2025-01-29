import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Title from "./Title";
import ImageOption from "./ImageOption";
import Button from "./Button";

import { IMultipleChoice, IMultipleChoiceOption } from "../types";

interface MultipleChoiceQuestionProps {
  question: IMultipleChoice;
  onCorrect: () => void;
  onWrong: () => void;
}

export default function MultipleChoiceQuestion({
  question,
  onCorrect,
  onWrong,
}: MultipleChoiceQuestionProps) {
  const [selected, setSelected] = useState<null | IMultipleChoiceOption>(null);

  const handleCheck = () => {
    if (selected?.isCorrect) {
      onCorrect();
    } else {
      onWrong();
    }

    setSelected(null);
  };

  return (
    <View style={styles.container}>
      <Title text={question.question} />

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            option={option}
            isSelected={option.id === selected?.id}
            onPress={() => setSelected(option)}
          />
        ))}
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
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
});
