import { shuffleOptions } from "../utils";

export const quizReducer = (quizState, { type, payload }) => {
  switch (type) {
    case "SELECTED_CATEGORY":
      return {
        ...quizState,
        currentCategory: payload.value,
        quizTitle: payload.title
      };

    case "SET_QUESTIONS":
      return {
        ...quizState,
        questions: payload.questions,
        ansOptions: shuffleOptions(payload.questions, payload.currentQuestion)
      };
    
    case "SET_CURRENT_QUESTION":
      return {
        ...quizState,
        currentQuestion: payload
      }
    
    case "SET_SCORE":
      return {
        ...quizState,
        score: payload
      }
    
    case "SET_RESULT":
      return {
        ...quizState,
        finalResult: payload
      }

    case "GET_QUESTIONS":
      return {
        ...quizState,
        questions: payload,
        ansOptions: shuffleOptions(payload, 0)
      };

    case "ANSWER_CHECK":
      return {
        ...quizState,
        selectedAnswer: payload,
        score:
          payload === quizState.questions?.[quizState.currentQuestion]?.correct_answer
            ? quizState.score + 10
            : quizState.score,
        isSelected: !quizState.isSelected
      };

    case "NEXT_QUESTION":
      return {
        ...quizState,
        currentQuestion: quizState.currentQuestion < quizState.questions.length - 1 && quizState.currentQuestion + 1,
        finalResult: [...quizState.finalResult, { qns: payload.qns, ans: payload.ans }],
        selectedAnswer: "",
        ansOptions: shuffleOptions(quizState.questions, quizState.currentQuestion + 1),
        isSelected: !quizState.isSelected
      };
    
    case "RESULT_PAGE":
      return {
        ...quizState,
        finalResult: [...quizState.finalResult, { qns: payload.qns, ans: payload.ans }],
      };
    
    case "END_GAME":
      return {
        ...quizState,
        currentCategory: "",
        currentQuestion: 0,
        score: 0,
        selectedAnswer: "",
        questions: [],
        ansOptions: [],
        finalResult: [],
        isSelected: true
      };

    default:
      return quizState;
  }
};
