import { categories } from "../db/categories";
import { Navbar, QuizCard, Footer, FilterByCategory,
  MostPlayed, ClearFilter } from "../components";
import { useState, useEffect } from "react";
import { getCategoryFilterProducts, getByMostPlayed, getBySearch } from "../utils";
import { useFilter } from "../context";
import "./Home.css"

export const Home = () => {
  const [route, setRoute] = useState();

  useEffect(() => {
    setRoute("home");
  }, [route]);

  const {
    filterState: { category, isMostPlayed, searchResult }
  } = useFilter();

  const filterByCategory = getCategoryFilterProducts(categories, category);
  const filterByMostPlayed = getByMostPlayed(filterByCategory, isMostPlayed);
  const filterBySearch = getBySearch(filterByMostPlayed, searchResult);

  return (
    <>
      <Navbar route={route} />
      <div className="d-flex">
        <aside className="side-nav sidebar-position">
        <ClearFilter />
          <FilterByCategory />
          <MostPlayed />
        </aside>
        <main class="product-content d-flex gap-32px wrap">
          {filterBySearch && filterBySearch.length > 0 ? (
            filterBySearch.map((category) => {
              return <QuizCard category={category} key={category.id}/>;
            })
          ) : (
            <main class="product-content error-message">
              <h2>No Quiz Found. Try something else!!</h2>
            </main>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
};
