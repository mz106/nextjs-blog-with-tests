import React from 'react'


import ProductDisplay from '@/components/products/productDisplay/ProductDisplay';

import { getProducts } from '../../lib/features/products/queries';

import type { ProductType, ProductsProps } from '../../lib/features/products/types';

import classes from './index.module.css';

type Props = {}


const ProductsPage = ({ filteredProductProps, allProducts }: ProductsProps) => {
  
  // const [ products, setProducts ] = useState<ProductType[]>([]);
  // const [ productPageDisplay, setProductPageDisplay ] = useState<ProductType[]>([]);
  
  return (
    <div className={classes.wrapper} >
      <ProductDisplay filteredProductProps={filteredProductProps} allProducts={allProducts} />
    </div>
  )
}

export async function getStaticProps() {
  const allProducts: [] = await getProducts();

   const filterFunction = (product: ProductType) => {
      if(product.category === `women's clothing`) {
        return product;
      }
   };

  const filteredProducts: any = allProducts.filter(filterFunction);
  
  return {
    props: {
      allProducts: allProducts,
      filteredProductProps: filteredProducts,
    },
  };
};

export default ProductsPage

