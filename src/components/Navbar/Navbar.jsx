import "./Navbar.css";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { useQuiz, useAuth, useFilter } from "../../context";

export const Navbar = ({route}) => {
  const {
    quizState: { currentCategory },
    quizDispatch
  } = useQuiz();

  const {
    state: { userName }
  } = useAuth();

  const { filterDispatch } = useFilter();

  const handleInput = (e) => {
    filterDispatch({
      type: "SEARCH",
      payload: e.target.value
    });
  };

  return (
    <header className="heading d-flex grow1-shrink1-basisauto align-center fixed top-0 left-0">
      <div className="heading-title-icon d-flex align-center">
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
      {route === "home" && (
        <div className="search-box-container relative">
          <input
            className="search-box padding-all-8"
            type="text"
            placeholder="Search"
            onChange={(e) => handleInput(e)}
          />
          <span class="material-icons-outlined search-icon absolute">
            search
            </span>
        </div>
      )}
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
