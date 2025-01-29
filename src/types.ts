export interface IMultipleChoiceOption {
  id: number;
  image: string;
  text: string;
  isCorrect: boolean;
}

export interface IMultipleChoice {
  id: number;
  type: string;
  question: string;
  options: IMultipleChoiceOption[];
}

export interface IOpenEnded {
  id: number;
  type: string;
  text: string;
  answer: string;
}

export interface IFillInTheBlank {
  id: number;
  type: string;
  preText: string;
  postText: string;
  options: string[];
  answer: string;
}

export interface ITranslateTheSentence {
  id: number;
  type: string;
  sentence: string;
  options: string[];
  answer: string;
}
