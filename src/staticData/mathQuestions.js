import { v4 as uuid } from "uuid";
export const mathQuestions = [
  {
    id: uuid(),
    number: 1,
    question: "What is the formuala to find area of a circle?",
    correctAnswer: "pir^2",
    incorrectAnswer: ["2pir^2", "2pir", "pid^2"]
  },
  {
    id: uuid(),
    number: 2,
    question: "What is the formula to find circumference of a circle?",
    correctAnswer: "2pir",
    incorrectAnswer: ["pir", "pir^2", "pird"]
  },
  {
    id: uuid(),
    number: 3,
    question: "What is formula to find area of a rectnagle?",
    correctAnswer: "lxb",
    incorrectAnswer: ["2xlxb", "(lxb)^2", "lb^2"]
  },
  {
    id: uuid(),
    number: 4,
    question: "What is the formula to find area of a square?",
    correctAnswer: "side^2",
    incorrectAnswer: ["2side^2", "4xside", "2pi x side"]
  },
  {
    id: uuid(),
    number: 4,
    question: "Which one of the following is a quadratic equation?",
    correctAnswer: "ax^2 + bx + c = 0",
    incorrectAnswer: ["axy + bx + c", "ax^3 + bx^2 + c", "2ax + 3bx + c"]
  }
];
