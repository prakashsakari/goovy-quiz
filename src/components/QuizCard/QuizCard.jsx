import "./QuizCard.css";
import {Link} from "react-router-dom";

export const QuizCard = ({ category }) => {
  const { title, description, img, mostPlayed } = category;
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
            <small class="c-badge bg-color absolute left-0">Most Played</small>
          )}
        </div>
      </div>
      <div className="details">
        <h3 className="title">{title}</h3>
        <span>{description}</span>
      </div>
      <button className="button btn-primary cursor">
        <Link class="link-btn" to="/rules">Play Now</Link>
      </button>
    </div>
  );
};
