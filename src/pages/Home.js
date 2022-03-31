import { categories } from "../staticData/categories";
import { Navbar, QuizCard, Footer } from "../components";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex-container">
        {categories.map((category) => {
          return <QuizCard category={category} key={category.id}/>;
        })}
      </main>
      <Footer />
    </>
  );
};
