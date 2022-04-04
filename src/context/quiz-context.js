import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducer/quizReducer";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, {
    currentCategory: "",
    currentQuestion: 0,
    score: 0,
    selectedAnswer: "",
    questions: [],
    ansOptions: [],
    finalResult: [],
    isSelected: true,
    quizTitle: ""
  });

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
