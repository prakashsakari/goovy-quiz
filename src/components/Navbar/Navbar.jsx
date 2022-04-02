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
          <li class="list-item-inline">
            {route === "rules" ? (
              <Link
                to="/quiz"
                class="link nav-options cursor"
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
              <Link to="/rules" class="link nav-options cursor">
                Guidelines
              </Link>
            ) : (
              ""
            )}
          </li>
          {route === "rules" || route === "home" || route === "signup" ? (
            <li className="list-item-inline">
              <Link to="/login" class="link nav-options cursor">
                Login
              </Link>
            </li>
          ) : route === "result" ? (
            <li className="list-item-inline">
              <Link
                to="/"
                class="link nav-options cursor"
                onClick={() =>
                  quizDispatch({
                    type: "LOGOUT"
                  })
                }
              >
                Logout
              </Link>
            </li>
          ) : route === "login" ? (
            <li className="list-item-inline">
              <Link to="/signup" class="link nav-options cursor">
                Signup
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </header>
  );
};
