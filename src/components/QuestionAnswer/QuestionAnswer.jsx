import "./QuestionAnswer.css";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context";
import axios from "axios";
import { useEffect } from "react";

const useAsync = (currentCategory, questions, currentQuestion, score, finalResult) => {
  const { quizDispatch } = useQuiz();

  useEffect(() => {
    const data = localStorage.getItem("questions");
    data === null && questions.length < 1 && (async () => {
      const {
        data: { results }
      } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${currentCategory}&difficulty=medium&type=multiple`
      );
      quizDispatch({ type: "GET_QUESTIONS", payload: results });
      localStorage.setItem("questions", JSON.stringify(results));
      localStorage.setItem("currentQuestion", currentQuestion);
      localStorage.setItem("score", score);
      localStorage.setItem("finalResult", JSON.stringify(finalResult ?? []));
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
      quizTitle,
      finalResult
    },
    quizDispatch
  } = useQuiz();

  const navigate = useNavigate();

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

  useEffect(() => {
    const questions = JSON.parse(localStorage.getItem("questions"));
    const currentQuestion = localStorage.getItem("currentQuestion");
    const score = localStorage.getItem("score");
    const finalResult = JSON.parse(localStorage.getItem("finalResult"));
    questions !== null && questions.length > 0 && quizDispatch({
      type: "SET_QUESTIONS",
      payload: {questions, currentQuestion}
    })
    quizDispatch({
      type: "SET_CURRENT_QUESTION",
      payload: Number(currentQuestion)
    })
    quizDispatch({
      type: "SET_SCORE",
      payload: Number(score)
    })
    finalResult !== null && quizDispatch({
      type: "SET_RESULT",
      payload: finalResult
    })
  }, [])

  useAsync(currentCategory, questions, currentQuestion, score, finalResult);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  useEffect(() => {
    finalResult && localStorage.setItem("finalResult", JSON.stringify(finalResult));
  }, [finalResult]);

  const handleSelectAnswerClick = (option) => {
    quizDispatch({
      type: "ANSWER_CHECK",
      payload: option
    })
  }

  const handleQuitGameClick = () => {
    navigate("/");
    quizDispatch({
      type: "END_GAME"
    })
    localStorage.clear();
  }

  const handleNextQuestionClick = () => {
    quizDispatch({
      type: "NEXT_QUESTION",
      payload: {
        qns: questions[currentQuestion]?.question,
        ans: selectedAnswer
      }
    })
    localStorage.setItem("currentQuestion", currentQuestion + 1);
    
  }

  const handleSubmitQuizClick = () => {
    quizDispatch({
      type: "RESULT_PAGE",
      payload: {
        qns: questions[currentQuestion]?.question,
        ans: selectedAnswer
      }
    })
    finalResult.push({qns: questions[currentQuestion]?.question,
      ans: selectedAnswer});
    localStorage.setItem("finalResult", JSON.stringify(finalResult));
    localStorage.setItem("currentQuestion", currentQuestion + 1);
    navigate("/result");
  }

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
                  onClick={() => handleSelectAnswerClick(option)}
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
            <div className="d-flex gap">
              <button
                className="play-btn button btn-primary cursor"
                onClick={handleQuitGameClick}
              >
                Quit 
              </button>
              <button
                disabled={isSelected}
                className="nxt-qstn play-now-btn button btn-primary cursor"
                onClick={handleNextQuestionClick}
              >
                Next Question
              </button>
            </div>
          ) : (
              <button
                disabled={isSelected}
                className="nxt-qstn button play-now-btn btn-primary cursor"
                onClick={handleSubmitQuizClick}
              >
                Submit
              </button>
          )}
        </div>
      </section>
    </main>
  );
};
