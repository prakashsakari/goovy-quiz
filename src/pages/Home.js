import { categories } from "../staticData/categories";
import { Navbar, QuizCard, Footer } from "../components";
import { useState, useEffect } from "react";

export const Home = () => {
  const [route, setRoute] = useState();

  useEffect(() => {
    setRoute("home");
  }, [route]);

  return (
    <>
      <Navbar route={route}/>
      <main className="flex-container">
        {categories.map((category) => {
          return <QuizCard category={category} key={category.id}/>;
        })}
      </main>
      <Footer />
    </>
  );
};
