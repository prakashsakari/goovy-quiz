import "./QuestionAnswer.css";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import axios from "axios";
import { useEffect } from "react";

const useAsync = (currentCategory) => {
  const { quizDispatch } = useQuiz();

  useEffect(() => {
    (async () => {
      const {
        data: { results }
      } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${currentCategory}&difficulty=medium&type=multiple`
      );
      quizDispatch({ type: "GET_QUESTIONS", payload: results });
    })();
  }, []);
};

export const QuestionAnswer = () => {
  const {
    quizState: {
      currentCategory,
      score,
      selectedAnswer,
      questions,
      currentQuestion,
      ansOptions,
      isSelected,
      quizTitle
    },
    quizDispatch
  } = useQuiz();

  const getClassName = (option) => {
    if (
      selectedAnswer === option &&
      option === questions[currentQuestion].correct_answer
    ) {
      return "success";
    } else if (
      selectedAnswer === option &&
      option !== questions[currentQuestion].correct_answer
    ) {
      return "error";
    } else if (option === questions[currentQuestion].correct_answer) {
      return "success";
    }
  };

  useAsync(currentCategory);

  return (
    <main className="d-flex justify-center qns-main">
      <section className="question-dialog container-flex">
        <h2 className="d-flex justify-center qsn-title">
          {quizTitle}
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
              disabled={isSelected}
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
                disabled={isSelected}
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
