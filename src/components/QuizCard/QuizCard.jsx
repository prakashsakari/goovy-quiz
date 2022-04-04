import "./QuizCard.css";
import {Link} from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";

export const QuizCard = ({ category }) => {
  const {quizDispatch} = useQuiz();
  const { title, description, img, mostPlayed, quizCategory, value } = category;
  return (
    <div className="container relative">
      <div className="d-flex align-center justify-center">
        <div className="img-box ">
          <img
            className="img"
            src={img}
            alt="quiz"
          />
          {mostPlayed && (
            <small className="c-badge bg-color absolute left-0">Most Played</small>
          )}
        </div>
      </div>
      <div className="details">
        <h3 className="title">{title}</h3>
        <span>{description}</span>
      </div>
      <button className="button play-now-btn btn-primary cursor" onClick={() =>
          quizDispatch({
            type: "SELECTED_CATEGORY",
            payload: value
          })
        }>
        <Link className="play-now-link-btn" to="/rules">Play Now</Link>
      </button>
    </div>
  );
};
