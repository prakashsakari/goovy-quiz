import "./Navbar.css";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";

export const Navbar = ({route}) => {
  const {
    quizState: { currentCategory },
    quizDispatch
  } = useQuiz();

  return (
    <header className="heading d-flex grow-shrink-basis align-center">
      <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <img className="logo mr-1" src={logo} alt="logo" />
        <h1 className="heading-title">
          <a className="link" href="/">
            Groovy Quiz
          </a>
        </h1>
      </div>
      <nav className="navigation">
        <ul className="list-non-bullet">
          <li className="list-item-inline">
          {route === "rules" ? (
              <Link to="/quiz" className="link cursor" onClick={() =>
                quizDispatch({
                  type: "GET_DATA",
                  payload: currentCategory
                })
              }>
                Start Game 🚀
              </Link>
            ) : (
              <Link to="/rules" className="link cursor">
                Guidelines
              </Link>
            )}
          </li>
          <li className="list-item-inline">
            <Link to="/login" className="link cursor">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
