import React from 'react'

import ProductDisplay from '@/components/products/productDisplay/ProductDisplay';

import { getProducts } from '../../lib/features/products/queries';

import type { ProductType, ProductsProps } from '../../lib/features/products/types';

import classes from './index.module.css';

const ProductsPage = ({ filteredProductProps, allProducts }: ProductsProps) => {
  
  return (
    <div className={classes.wrapper} >
      <ProductDisplay filteredProductProps={filteredProductProps} allProducts={allProducts} />
    </div>
  )
}

export async function getStaticProps() {
  const allProducts: [] = await getProducts();

  //  const filterFunction = (product: ProductType) => {
  //     if(product.category === `women's clothing`) {
  //       return product;
  //     }
  //  };

  const filterFunction = (product: ProductType) => {
    if(product.id % 2 === 0 && product.id < 14) {
      return product;
    }
 };

  const filteredProducts: any = allProducts.filter(filterFunction);
  
  return {
    props: {
      filteredProductProps: filteredProducts,
    },
  };
};

export default ProductsPage

