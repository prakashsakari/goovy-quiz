import { useQuiz } from "../context/quiz-context";
import "./Result.css";
import { Results } from "../components";

export const Result = () => {
  const {
    quizState: { score, questions, finalResult }
  } = useQuiz();


  return (
    <main className="d-flex justify-center qns-main ">
      <section className="result-box container-flex ">
        <h2 className="d-flex justify-center">Result</h2>
        <h3 className="final-score d-flex justify-center">
          Final Score: {score}/{questions.length * 10}
        </h3>
        <div>
          {finalResult &&
            finalResult.map(({ qns, ans }, index) => {
              return <Results key={index} index={index} qns={qns} ans={ans} />;
            })}
        </div>
      </section>
    </main>
  );
};
