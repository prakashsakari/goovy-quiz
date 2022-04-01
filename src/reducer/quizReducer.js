import { mathQuestions, geogQuestions, historyQuestion } from "../staticData";
import { shuffleOptions } from "../utils/shuffleOptions";

export const quizReducer = (quizState, { type, payload }) => {
  switch (type) {
    case "SELECTED_CATEGORY":
      return {
        ...quizState,
        currentCategory: payload
      };

    case "GET_DATA":
      return {
        ...quizState,
        questions:
          payload === "maths"
            ? mathQuestions
            : payload === "history"
            ? historyQuestion
            : payload === "geog"
            ? geogQuestions
            : [],
        ansOptions: shuffleOptions(
          payload === "maths"
            ? mathQuestions
            : payload === "history"
            ? historyQuestion
            : payload === "geog"
            ? geogQuestions
            : [], 0)
      };

    case "ANSWER_CHECK":
      return {
        ...quizState,
        selectedAnswer: payload,
        score:
          payload === quizState.questions?.[quizState.currentQuestion]?.correctAnswer
            ? quizState.score + 10
            : quizState.score
      };

    case "NEXT_QUESTION":
      return {
        ...quizState,
        currentQuestion: quizState.currentQuestion < 4 && quizState.currentQuestion + 1,
        finalResult: [...quizState.finalResult, { qns: payload.qns, ans: payload.ans }],
        selectedAnswer: "",
        ansOptions: shuffleOptions(quizState.questions, quizState.currentQuestion + 1)
      };
    
    case "RESULT_PAGE":
      return {
        ...quizState,
        finalResult: [...quizState.finalResult, { qns: payload.qns, ans: payload.ans }],
      };
    default:
      return quizState;
  }
};
