import { useState } from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

import Title from "./Title";
import Button from "./Button";

import { ITranslateTheSentence } from "../types";

interface TranslateTheSentenceQuestionProps {
  question: ITranslateTheSentence;
  onCorrect: () => void;
  onWrong: () => void;
}

export default function TranslateTheSentenceQuestion({
  question,
  onCorrect,
  onWrong,
}: TranslateTheSentenceQuestionProps) {
  const [input, setInput] = useState("");

  const handleCheck = () => {
    if (input.toLowerCase().trim() === question.answer.toLowerCase()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };

  return (
    <View style={styles.container}>
      <Title text="Translate the sentence" />

      <View style={styles.body}>
        <View style={styles.detailsContainer}>
          <Image
            style={styles.actor}
            source={require("../../assets/images/eddy.png")}
            resizeMode="contain"
          />
          <View style={styles.speechContainer}>
            <Text style={styles.speech}>{question.text}</Text>
          </View>
        </View>

        <TextInput
          style={styles.textInput}
          value={input}
          onChangeText={setInput}
          placeholder="Type in English"
          textAlignVertical="top"
          multiline
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
        />
      </View>

      <Button text="Check" disabled={!input} onPress={handleCheck} />
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
  textInput: {
    flex: 1,
    backgroundColor: "#ebebeb",
    borderColor: "lightgrey",
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
  },
});
