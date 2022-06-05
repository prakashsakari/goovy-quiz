import { useFilter } from "../../context";

export const MostPlayed = () => {
  const {
    filterState: { isMostPlayed },
    filterDispatch
  } = useFilter();

  console.log(isMostPlayed);

  return (
    <div className="category-title">
      <h3 className="sub-title margin16-top-down">Additional Filters</h3>
      <div className="select-men">
        <label className="men d-flex gap-16px align-center">
          <input
            className="check-box"
            type="checkbox"
            value="most_played"
            onChange={() =>
              filterDispatch({
                type: "MOST_PLAYED"
              })
            }
            checked={isMostPlayed}
          />
          Most played
        </label>
      </div>
    </div>
  );
};
