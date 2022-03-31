import { v4 as uuid } from "uuid";

export const geogQuestions = [
  {
    id: uuid(),
    question:
      "Which of the following geographical term related to the ''piece of sub-continental land that is surrounded by water''?",
    correctAnswer: "Island",
    incorrectAnswer: ["Peninsula", "Strait", "Gulf"]
  },
  {
    id: uuid(),
    question: "Which of the following passes link Srinagar to Leh?",
    correctAnswer: "Zoji La Pass",
    incorrectAnswer: ["Nathula Pass", "Mana Pass", " Rohtas Pass"]
  },
  {
    id: uuid(),
    question:
      "Which of the following imaginary line almost divides India into two equal parts?",
    correctAnswer: "Tropic of Cancer",
    incorrectAnswer: ["Equator", "Arctic Circle", "Tropic of Capricorn"]
  },
  {
    id: uuid(),
    question: "Which of the following water bodies is the home of Lakshadweep?",
    correctAnswer: "Arabian Sea",
    incorrectAnswer: ["Indian Ocean", "Atlantic Ocean", "Bay of Bengal"]
  },
  {
    id: uuid(),
    question:
      "Which of the following water bodies separates the Andaman from the Nicobar?",
    correctAnswer: "10° Channel",
    incorrectAnswer: ["Gulf of Mannar", "Andaman Sea", "11° Channel"]
  }
];
