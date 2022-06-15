import React from 'react'

import ProductTitle from '@/components/products/productsOnPage/productTitle/ProductTitle';
import ProductSplash from '@/components/products/productsOnPage/productSplash/ProductSplash';
import ProductDetails from '@/components/products/productsOnPage/productDetails/ProductDetails';
import NextProduct from '@/components/products/productsOnPage/nextProduct/NextProduct';
import PrevProduct from '@/components/products/productsOnPage/prevProduct/PrevProduct';
import ShoppingCart from '@/components/shoppingCart/ShoppingCart';

import type { ProductType } from '../../../../lib/features/products/types';

import classes from './productFullDisplay.module.css';

type Props = {
      product: ProductType;
      nextProduct: ProductType;
      prevProduct: ProductType;
}

const ProductFullDisplay = ({ product, nextProduct, prevProduct }: Props) => {
  console.log(product.title)
  return (
    <div className={classes.wrapper}>
      <div className={classes.product_wrapper}>
         <ProductTitle title={product.title} />
          <ProductSplash image={product.image}/>
          <ProductDetails 
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              rating={product.rating.rate}
          />
          <div className={classes.next_prev_wrapper}>
            <PrevProduct prevProduct={prevProduct}/>
            <NextProduct nextProduct={nextProduct}/>
          </div>
      </div>
      <div className={classes.side_panel}>
        <ShoppingCart />
      </div>
       
    </div>
  )
}

export default ProductFullDisplay