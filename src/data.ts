export default [
  {
    id: 1,
    type: "MULTIPLE_CHOICE",
    question: 'Which of these is "the glass"?',
    options: [
      {
        id: 1,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
        isCorrect: false,
      },
      {
        id: 2,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
        isCorrect: true,
      },
      {
        id: 3,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
        isCorrect: false,
      },
      {
        id: 4,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    type: "TRANSLATE_THE_SENTENCE",
    text: "Yo soy un hombre",
    answer: "I am a man",
  },
  {
    id: 3,
    type: "FILL_IN_THE_BLANK",
    sentence: "I am learning Spanish",
    preText: "Estoy",
    postText: "español",
    options: ["duele", "eres", "vemos", "aprendiendo", "cabeza"],
    answer: "aprendiendo",
  },
  {
    id: 4,
    type: "FLIP_THE_SENTENCE",
    sentence: "Hace calor.",
    options: ["I have a brother.", "It's hot.", "What's happening?"],
    answer: "It's hot.",
  },
  {
    id: 5,
    type: "MULTIPLE_CHOICE",
    question: 'Which of these is "the coffee"?',
    options: [
      {
        id: 1,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
        isCorrect: true,
      },
      {
        id: 2,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
        isCorrect: false,
      },
      {
        id: 3,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
        isCorrect: false,
      },
      {
        id: 4,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
        isCorrect: false,
      },
    ],
  },
  {
    id: 6,
    type: "TRANSLATE_THE_SENTENCE",
    text: "La mujer",
    answer: "The woman",
  },
  {
    id: 7,
    type: "FILL_IN_THE_BLANK",
    sentence: "I love music",
    preText: "Me encanta la",
    postText: "",
    options: ["tengo", "musica", "ayudar", "hambre", "tiempo"],
    answer: "musica",
  },
  {
    id: 8,
    type: "FLIP_THE_SENTENCE",
    sentence: "Voy a dormir.",
    options: ["I'm going to sleep.", "It's late.", "I don't understand."],
    answer: "I'm going to sleep.",
  },
  {
    id: 9,
    type: "MULTIPLE_CHOICE",
    question: 'Which of these is "the cup"?',
    options: [
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
        isCorrect: false,
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
        isCorrect: false,
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
        isCorrect: false,
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
        isCorrect: true,
      },
    ],
  },
  {
    id: 10,
    type: "TRANSLATE_THE_SENTENCE",
    text: "Me gusta React Native",
    answer: "I like react native",
  },
];
