import "./QuizCard.css";
import { useNavigate } from "react-router-dom";
import { useQuiz, useAuth } from "../../context";

export const QuizCard = ({ category }) => {
  const {quizDispatch} = useQuiz();
  const { title, description, img, mostPlayed, value } = category;

  const {user} = useAuth();
  const navigate = useNavigate();

  const handlePlayNowClick = () => {
    if (user) navigate("/rules")
    else navigate("/login")
  }

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
            payload: {
              value: value,
              title: title
            }
          })
        }>
        <button className="button play-now-link-btn cursor" onClick={handlePlayNowClick}>Play Now</button>
      </button>
    </div>
  );
};
