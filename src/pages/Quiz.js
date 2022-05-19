import { Navbar, QuestionAnswer } from "../components";
import { useState, useEffect } from "react";

export const Quiz = () => {
  const [route, setRoute] = useState();

  useEffect(() => {
    setRoute("quiz");
  }, [route]);

  return (
  <>
  <Navbar route={route}/>
  <QuestionAnswer />
  </>
  );
};
