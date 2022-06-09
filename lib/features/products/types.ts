export interface ProductType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    },
  };

  export interface ProductsProps {
    allProducts: ProductType[],
    filteredProductProps: ProductType[],
  };
  
  // export interface FilteredProductProps {
  //   filteredProductProps: ProductType[],
  // };