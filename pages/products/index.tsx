import React, { useEffect, useState } from 'react'

import ProductDisplay from '@/components/products/productDisplay/ProductDisplay';

import { getProducts } from '../../lib/features/products/queries';

import type { ProductType, ProductProps } from '../../lib/features/products/types';

type Props = {}


const ProductsPage = () => {
  const [ products, setProducts ] = useState<ProductType[]>([]);
  const [ productPageDisplay, setProductPageDisplay ] = useState<ProductType[]>([]);

  useEffect(() => {
  
   (async () => {
    const allProducts: any = await getProducts();
    setProducts(allProducts);
    
   })()
   
   if(products) {
     products.forEach((product: any, index: number) => {
       console.log(product)
     })
   }

   const tempArr = [...products];

   const filterFunction = (product: any) => {
      if(product.category === `women's clothing`) {
        return product;
      }
   };

   const displayProducts = tempArr.filter(filterFunction);
   setProductPageDisplay(displayProducts);
  }, []);

  

  return (
    <div>
      {/* {products.map((product: any, index: number) => (
        <div>
          <p key={index }>{product.id}</p>
          <img src={product.image} />
        </div>
      ))} */}
      <ProductDisplay productPageDisplay={productPageDisplay} />
    </div>
  )
}

export default ProductsPage

