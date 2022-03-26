import "./QuizCard.css";
export const QuizCard = ({ category }) => {
  const { title, description, img } = category;
  return (
    <div className="container relative">
      <div className="d-flex align-center justify-center">
        <div className="img-box ">
          <img
            className="img"
            src={img}
            alt="quiz"
          />
        </div>
      </div>
      <div className="details">
        <h3 className="title">{title}</h3>
        <span>{description}</span>
      </div>
      <button className="button btn-primary cursor">Play Now</button>
    </div>
  );
};
