
import React from 'react'

import ProductItem from '../productItem/ProductItem';
import Test from '../test';

import type { ProductType, ProductProps } from '../../../lib/features/products/types';

type Props = {}

export interface SingleProductProps {
    product: object,
    key: number
}


const ProductDisplay = ({ productPageDisplay }: ProductProps) => {
    console.log("ProductDisplay: ", productPageDisplay)
  return (
    // <div>{productPageDisplay.map((product: any) => (
    //     <p>{product.title}</p>
    // ))}</div>
    <div>
        {productPageDisplay.map((product: ProductType, index: number) => (
            <ProductItem 
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating} 
            />
        ))}
        {/* {productPageDisplay.map((product: ProductType) => (
            <Test />
        ))} */}
        
    </div>
  )
}

export default ProductDisplay;