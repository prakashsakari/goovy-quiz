import { useFilter } from "../../context";
import "./Filter.css";

export const FilterByCategory = () => {
  const {
    filterState: { category },
    filterDispatch
  } = useFilter();

  const handleChange = (e) => {
    filterDispatch({
      type: "CATEGORY",
      payload: e.target.value
    });
  };

  return (
    <div className="category-title">
      <h3 className="sub-title margin16-top-down">Categroy</h3>
      <div className="select-men">
        <label className="men d-flex gap-16px align-center">
          <input
            className="check-box"
            type="radio"
            value="all"
            checked={category === "all"}
            onChange={(e) => handleChange(e)}
          />
          All
        </label>
      </div>
      <div className="select-men margin8-top-down">
        <label className="men d-flex gap-16px">
          <input
            className="check-box"
            type="radio"
            value="entertainment"
            checked={category === "entertainment"}
            onChange={(e) => handleChange(e)}
          />
          Entertainment
        </label>
      </div>
      <div className="select-women margin8-top-down">
        <label className="women d-flex gap-16px">
          {" "}
          <input
            className="check-box"
            type="radio"
            value="education"
            checked={category === "education"}
            onChange={(e) => handleChange(e)}
          />
          Education
        </label>
      </div>
      <div className="select-women margin8-top-down">
        <label className="women d-flex gap-16px">
          {" "}
          <input
            className="check-box"
            type="radio"
            value="tech"
            checked={category === "tech"}
            onChange={(e) => handleChange(e)}
          />
          Tech
        </label>
      </div>
      <div className="select-boys margin8-top-down">
        <label className="boys d-flex gap-16px">
          <input
            className="check-box"
            type="radio"
            value="sports"
            checked={category === "sports"}
            onChange={(e) => handleChange(e)}
          />
          Sports
        </label>
      </div>
      <div className="select-girls margin8-top-down">
        <label className="girls d-flex gap-16px">
          <input
            className="check-box"
            type="radio"
            value="vehicles"
            checked={category === "vehicles"}
            onChange={(e) => handleChange(e)}
          />
          Vehicles
        </label>
      </div>
    </div>
  );
};
