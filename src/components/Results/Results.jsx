import { useQuiz } from "../../context";

export const Results = ({ index, qns, ans }) => {
  const {
    quizState: { questions }
  } = useQuiz();

  return (
    <div className="result">
      <h3 className="question">Q{index + 1} - {qns}</h3>
      <h4 className={`option d-flex justify-center ${ questions[index]?.correct_answer === ans ? "success" : "error"}`}>
        Your Answer - {ans}
      </h4>
      {questions[index]?.correct_answer !== ans && (
        <h4 className="success option d-flex justify-center">
          Correct Answer - {questions[index]?.correct_answer}
        </h4>
      )}
    </div>
  );
};
