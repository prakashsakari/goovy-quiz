import { useQuiz } from "../context";
import "./Result.css";
import { Navbar, Results } from "../components";
import {useState, useEffect} from "react";

export const Result = () => {
  const [route, setRoute] = useState();

  useEffect(() => {
    setRoute("result");
  }, [route]);

  const {
    quizState: { score, questions, finalResult }, quizDispatch
  } = useQuiz();

  useEffect(() => {
    const finalResult = JSON.parse(localStorage.getItem("finalResult"));
    quizDispatch({
      type: "SET_RESULT",
      payload: finalResult
    })
  }, [])


  return (
    <>
    <Navbar route={route} />
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
    </>
    
  );
};
