import { Navbar, QuestionAnswer, Loader } from "../components";
import { useState, useEffect, Fragment } from "react";

export const Quiz = () => {
  const [route, setRoute] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 1000)
  }, [])

  useEffect(() => {
    setRoute("quiz");
  }, [route]);

  return (
    <Fragment>
      {!isLoading ? <Loader /> : (<Fragment>
        <Navbar route={route}/>
        <QuestionAnswer />
      </Fragment>)}
    </Fragment>
  
  );
};
