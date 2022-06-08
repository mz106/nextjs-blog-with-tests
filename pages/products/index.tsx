import React, { useEffect, useState } from 'react'

import ProductDisplay from '@/components/products/productDisplay/ProductDisplay';

import { getProducts } from '../../lib/features/products/queries';

import type { ProductType, ProductProps } from '../../lib/features/products/types';

type Props = {}


const ProductsPage = () => {
  const [ products, setProducts ] = useState<ProductType[]>([]);
  const [ productPageDisplay, setProductPageDisplay ] = useState<ProductType[]>([]);

  useEffect(() => {
    console.log("useEffect hit");
   (async () => {
    const allProducts: any = await getProducts();
    setProducts(allProducts);
    console.log("useEffect iffy: ", products)
   })()

   const tempArr = [...products];

   const filterFunction = (product: any) => {
      if(product.category === `women's clothing`) {
        return product;
      }
   };

   const displayProducts = tempArr.filter(filterFunction);
   setProductPageDisplay(displayProducts);
   console.log(productPageDisplay)
  }, []);

  

  return (
    <div>
      <ProductDisplay productPageDisplay={productPageDisplay} />
      {/* {productPageDisplay.map((product: any) => (
        <p>{product.id}</p>
      ))} */}
    </div>
  )
}

export default ProductsPage

