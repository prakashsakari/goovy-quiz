import { useQuiz } from "../../context/quiz-context";

export const Results = ({ index, qns, ans }) => {
  const {
    quizState: { questions }
  } = useQuiz();

  return (
    <div className="result">
      <h3 className="question">Q{index + 1} - {qns}</h3>
      <h4 className={`option d-flex justify-center ${ questions[index]?.correctAnswer === ans ? "success" : "error"}`}>
        Your Answer - {ans}
      </h4>
      {questions[index].correctAnswer !== ans && (
        <h4 className="success option d-flex justify-center">
          Correct Answer - {questions[index]?.correctAnswer}
        </h4>
      )}
    </div>
  );
};
