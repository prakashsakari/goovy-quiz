import "./Filter.css";
import { useFilter } from "../../context";

export const ClearFilter = () => {
  const { filterDispatch } = useFilter();
  return (
    <div className="filter-clear d-flex align-center">
      <h3 className="sub-title">Filter</h3>
      <button
        className="button clear-btn cursor mg-left"
        onClick={() =>
          filterDispatch({
            type: "CLEAR"
          })
        }
      >
        Clear
      </button>
    </div>
  );
};
