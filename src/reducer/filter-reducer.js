export const filterReducer = (filterState, { type, payload }) => {
    switch (type) {
      case "CATEGORY":
        return {
          ...filterState,
          category: payload
        };
  
      case "MOST_PLAYED":
        return {
          ...filterState,
          isMostPlayed: !filterState.isMostPlayed
        };
  
      case "SEARCH":
        return {
          ...filterState,
          searchResult: payload
        };
    case "CLEAR":
        return {
            ...filterState,
            category: "all",
            isMostPlayed: false,
            searchResult: ""
        };
  
      default:
        return filterState;
    }
  };
  