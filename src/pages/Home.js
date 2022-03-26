import { categories } from "../staticData/categories";
import { Navbar, QuizCard, Footer } from "../components";
export const Home = () => {
  return (
    <>
      <Navbar />
      <main class="flex-container">
        {categories.map((category) => {
          return <QuizCard category={category} />;
        })}
      </main>
      <Footer />
    </>
  );
};
