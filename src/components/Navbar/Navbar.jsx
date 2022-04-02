import "./Navbar.css";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import { useAuth } from "../../context/auth-context";

export const Navbar = ({route}) => {
  const {
    quizState: { currentCategory },
    quizDispatch
  } = useQuiz();

  const {
    state: { userName }
  } = useAuth();

  return (
    <header className="heading d-flex grow-shrink-basis align-center">
      <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <img className="logo mr-1" src={logo} alt="logo" />
        <h1 className="heading-title">
        {route === "quiz" || route === "result" ? (
            "Groovy Quiz"
          ) : (
            <Link className="link nav-options" to="/">
              Groovy Quiz
            </Link>
          )}
        </h1>
      </div>
      <nav className="navigation">
        <ul className="list-non-bullet">
          <li className="list-item-inline">
            {route === "rules" ? (
              <Link
              to={userName ? "/quiz" : "/login"}
                className="link nav-options cursor"
                onClick={() =>
                  quizDispatch({
                    type: "GET_DATA",
                    payload: currentCategory
                  })
                }
              >
                Start Game 🚀🚀
              </Link>
            ) : route === "home" ? (
              <Link to="/rules" className="link nav-options cursor">
                Guidelines
              </Link>
            ) : (
              ""
            )}
          </li>
          {route === "rules" || route === "home" || route === "signup" ? (
            <li className="list-item-inline">
              <Link to="/login" className="link nav-options cursor">
              {userName ? `Hi, ${userName}` : "Login"}
              </Link>
            </li>
          ) : route === "result" ? (
            <li className="list-item-inline">
              <Link
                to="/"
                className="link nav-options cursor"
                onClick={() =>
                  quizDispatch({
                    type: "END_GAME"
                  })
                }
              >
                End Game - Adios
              </Link>
            </li>
          ) : route === "login" ? (
            <li className="list-item-inline">
              <Link to="/signup" className="link nav-options cursor">
                Signup
              </Link>
            </li>
          ) : route === "quiz" ? (
            <li className="list-item-inline">
              <span className="link nav-options cursor">
                {userName && `Hi, ${userName}`}
              </span>
            </li>
          ) : ""}
        </ul>
      </nav>
    </header>
  );
};
