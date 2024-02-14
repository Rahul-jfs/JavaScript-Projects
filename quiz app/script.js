const questoins = [
  {
    question: "Which fruit has the highest oil content?",
    answers: [
      {
        text: "Peach",
        correct: false,
      },
      {
        text: "Avocado",
        correct: false,
      },
      {
        text: "Olive",
        correct: true,
      },
      {
        text: "Mango",
        correct: false,
      },
    ],
  },
  {
    question: "Where was the kiwi fruit first grown?",
    answers: [
      {
        text: "New Zealand",
        correct: false,
      },
      {
        text: "China",
        correct: true,
      },
      {
        text: "Australia",
        correct: false,
      },
      {
        text: "Chile",
        correct: false,
      },
    ],
  },
  {
    question: "What percentage of the watermelon is water?",
    answers: [
      {
        text: "34",
        correct: false,
      },
      {
        text: "80",
        correct: false,
      },
      {
        text: "66",
        correct: false,
      },
      {
        text: "92",
        correct: true,
      },
    ],
  },
  {
    question: "Apple pips contain:",
    answers: [
      {
        text: "juice",
        correct: false,
      },
      {
        text: "Vitamin H",
        correct: false,
      },
      {
        text: "sodium",
        correct: false,
      },
      {
        text: "Cyanide",
        correct: true,
      },
    ],
  },
];

const questionElement = document.querySelector(".question");
const answerBtn = document.querySelector(".answer-btns");
const nextBtn = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;
