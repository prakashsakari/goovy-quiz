import { useEffect, useState } from "react";
import { Navbar, Rule } from "../components";

export const Rules = () => {
  const [route, setRoute] = useState();

  useEffect(() => {
    setRoute("rules");
  }, [route]);

  return (
    <>
      <Navbar route={route} />
      <Rule />
    </>
  );
};
