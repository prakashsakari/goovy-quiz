export const getBySearch = (product, searchResult) => {
    const filteredProduct = product.filter(({ title }) =>
      title.toLowerCase().includes(searchResult.toLowerCase())
    );
    return filteredProduct;
  };
  