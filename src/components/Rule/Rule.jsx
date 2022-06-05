import { useNavigate } from "react-router-dom";
import "./Rule.css";
import rules from "../../assets/rules.svg";
import { useAuth } from "../../context";

export const Rule = () => {

  const navigate = useNavigate();

  const {
    user
  } = useAuth();

  return (
    <main className="grid-container-two-col ">
      <section className="section-img-box">
        <img className="section-img" src={rules} alt="rules" />{" "}
      </section>
      <section className="section-rule-box">
        <div className="rules">
          <h2 className="rule-title">Guidelines</h2>
          <ul className="rules-list">
            <li className="rule-point">
              There are total 5 questions in each category.
            </li>
            <li className="rule-point">You can attempt each question only once.</li>
            <li className="rule-point">
              Each question carries one mark. No negative marking for wrong
              answers.
            </li>
            <li className="rule-point">Question are Multiple Choice Questions.</li>
            <li className="rule-point">
              Don't plagarize. Try to answer on your own.
            </li>
            <li className="rule-point">You can take the quiz multiple times.</li>
          </ul>
          <button className="play-btn cursor" onClick={() => navigate(user ? "/quiz" : "/login")}>

              Let the game begin
              <span role="img" aria-label="fire">
                🔥🔥
              </span>
          </button>
        </div>
      </section>
    </main>
  );
};
