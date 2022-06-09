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

  export interface AllPropuctsProps {
    allProducts: ProductType[],
  };
  
  export interface ProductProps {
    productPageDisplay: ProductType[],
  };