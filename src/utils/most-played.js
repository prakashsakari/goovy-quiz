const getByMostPlayed = (products, isMostPlayed) => {
    let filtertedList = [];
    let newList = [];
    if (!isMostPlayed) {
      newList = products.filter(({ mostPlayed }) => mostPlayed === isMostPlayed);
      filtertedList.push(...newList);
    }
    newList = products.filter(({ mostPlayed }) => mostPlayed === true);
    filtertedList.push(...newList);
    return filtertedList;
  };
  
  export { getByMostPlayed };
  