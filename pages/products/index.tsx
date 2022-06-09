import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

import ProductDisplay from '@/components/products/productDisplay/ProductDisplay';

import { getProducts } from '../../lib/features/products/queries';

import type { ProductType, ProductProps, AllPropuctsProps } from '../../lib/features/products/types';

import classes from './index.module.css';

type Props = {}


const ProductsPage = ({ allProducts }: AllPropuctsProps) => {
  // console.log("from gererversideprops: ", allProducts)
  const [ products, setProducts ] = useState<ProductType[]>([]);
  const [ productPageDisplay, setProductPageDisplay ] = useState<ProductType[]>([]);

  // setProducts(allProducts)
  // console.log("productspage setproducts: ", products)

  const { data, error } = useSWR('https://fakestoreapi.com/products');
  console.log(data);

  useEffect(() => {
    console.log("data inside useeffect: ", data)
  //  (async () => {
  //   // const allProducts: any = await getProducts();
  //   setProducts(allProducts);
  //   console.log("useeffect setproducts: ", products);
  //  })()
  // setProducts(allProducts);
  //   console.log("useeffect setproducts: ", products);

  //  const tempArr = [...products];

  //  const filterFunction = (product: ProductType) => {
  //     if(product.category === `women's clothing`) {
  //       return product;
  //     }
  //  };

  //  const displayProducts = tempArr.filter(filterFunction);
  //  setProductPageDisplay(displayProducts);
  //  console.log("index.tsx productPageDisplay: ", productPageDisplay)
  //  console.log("hello world")
  }, []);

  

  return (
    <div className={classes.wrapper} >
      <ProductDisplay productPageDisplay={productPageDisplay} />
    </div>
  )
}

export async function getServerSideProps() {
    const allProducts: AllPropuctsProps = await getProducts();
    return {
      props: {
        allProducts: allProducts,
      }
    }
};

export default ProductsPage

