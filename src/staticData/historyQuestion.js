import { v4 as uuid } from "uuid";

export const historyQuestion = [
  {
    id: uuid(),
    question: "Which king started the organization of Kumbh fair at Allahabad?",
    correctAnswer: "Harshavardhana",
    incorrectAnswer: ["Narshimhvarman", "Dhruvasena Ii", "Akabar"]
  },
  {
    id: uuid(),
    question: "Who was the first Indian ruler who had territory outside India?",
    correctAnswer: "Kanishka",
    incorrectAnswer: ["Huvishka", "Chandragupta Maurya", "Ashoka"]
  },
  {
    id: uuid(),
    question: "Where were the hymns of Rigveda composed?",
    correctAnswer: "Punjab",
    incorrectAnswer: ["Gujarat", "Uttar Pradesh", "Rajasthan"]
  },
  {
    id: uuid(),
    question: "Which empire lasted the longest among the following?",
    correctAnswer: "The Rashtrakutas",
    incorrectAnswer: ["The Senas", "The Pratiharas", "The Palas"]
  },
  {
    id: uuid(),
    question:
      "Who was the ruler of the kingdom between the rivers Jhelum and Chenab?",
    correctAnswer: "King Porus",
    incorrectAnswer: [
      "Alexander the Great",
      "Darius III",
      "Chandragupta Maurya"
    ]
  }
];
