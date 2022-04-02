import "./QuestionAnswer.css";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";

export const QuestionAnswer = () => {
  const {
    quizState: {
      currentCategory,
      score,
      selectedAnswer,
      questions,
      currentQuestion,
      ansOptions
    },
    quizDispatch
  } = useQuiz();

  const getClassName = (option) => {
    if (
      selectedAnswer === option &&
      option === questions[currentQuestion].correctAnswer
    ) {
      return "success";
    } else if (
      selectedAnswer === option &&
      option !== questions[currentQuestion].correctAnswer
    ) {
      return "error";
    } else if (option === questions[currentQuestion].correctAnswer) {
      return "success";
    }
  };

  return (
    <main className="d-flex justify-center qns-main">
      <section className="question-dialog container-flex">
        <h2 className="d-flex justify-center qsn-title">
          {currentCategory === "maths"
            ? "Maths Formula"
            : currentCategory === "history"
            ? "History"
            : currentCategory === "geog"
            ? "Geography"
            : ""}
        </h2>
        <div className="qsn_scr">
          <span>Questions: {currentQuestion + 1}/{questions.length}</span>
          <span className="score">Score: {score}</span>
        </div>
        <div className="question">
          <span>Q{currentQuestion + 1} - {questions?.[currentQuestion]?.question}</span>
        </div>
        <div className="options-box">
          {ansOptions &&
            ansOptions.map((option, index) => {
              return (
                <button
                  key={index}
                  onClick={() =>
                    quizDispatch({
                      type: "ANSWER_CHECK",
                      payload: option
                    })
                  }
                  className={`button option d-flex justify-center ${
                    selectedAnswer && getClassName(option)
                  }`}
                  disabled={selectedAnswer}
                >
                  {option}
                </button>
              );
            })}
        </div>
        <div className="nxt-btn-container">
          {currentQuestion < questions.length - 1 ? (
            <button
              className="nxt-qstn play-now-btn button btn-primary cursor"
              onClick={() =>
                quizDispatch({
                  type: "NEXT_QUESTION",
                  payload: {
                    qns: questions[currentQuestion]?.question,
                    ans: selectedAnswer
                  }
                })
              }
            >
              Next Question
            </button>
          ) : (
            <Link to="/result">
              <button
                className="nxt-qstn button play-now-btn btn-primary cursor"
                onClick={() =>
                  quizDispatch({
                    type: "RESULT_PAGE",
                    payload: {
                      qns: questions[currentQuestion]?.question,
                      ans: selectedAnswer
                    }
                  })
                }
              >
                Submit
              </button>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
};
