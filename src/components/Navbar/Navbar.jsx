import "./Navbar.css";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <header className="heading d-flex grow-shrink-basis align-center">
      <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <img className="logo mr-1" src={logo} alt="lightbul" />
        <h1 className="heading-title">
          <a className="link" href="/">
            Groovy Quiz
          </a>
        </h1>
      </div>
      <nav className="navigation">
        <ul className="list-non-bullet">
          <li class="list-item-inline">
            <Link to="/rules" class="link cursor">
              Guidelines
            </Link>
          </li>
          <li className="list-item-inline">
            <Link to="/login" class="link cursor">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
