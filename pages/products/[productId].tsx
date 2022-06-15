import React from 'react'
import { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import type { ProductType, GroupProductProps } from '../../lib/features/products/types';

import ProductFullDisplay from '@/components/products/productsOnPage/productFullDisplay/ProductFullDisplay';

import classes from './productId.module.css';

type Props = {
        product: ProductType;
        nextProduct: ProductType;
        prevProduct: ProductType;
};

const ProductDetailPage = (props: Props) => {

    console.log(props)
  return (
    <div className={classes.wrapper}>
        <ProductFullDisplay product={props.product} nextProduct={props.nextProduct} prevProduct={props.prevProduct} />
    </div>
  )
}

export async function getStaticProps(context: any) {
    const productId: string = context.params.productId;

    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    console.log(response);
    const responsePrev = await parseInt(productId) - 1 < 1 ? null : await fetch(`https://fakestoreapi.com/products/${(parseInt(productId) -1 ).toString()}`);
    const responseNext = await parseInt(productId) + 1 > 20 ? null : await fetch(`https://fakestoreapi.com/products/${(parseInt(productId) +1 ).toString()}`);
    
    const product: ProductType = await response.json();
    console.log(product)
    let prevProduct: ProductType;
    let nextProduct: ProductType
    if(!responsePrev) {
        prevProduct = {
            id: 0,
            title: '',
            price: 0,
            description: '',
            category: '',
            image: '',
            rating: {
                rate: 0,
                count: 0
            }
        };
    } else {
        prevProduct = await responsePrev?.json();
    }

    if(!responseNext) {
        nextProduct = {
            id: 0,
            title: '',
            price: 0,
            description: '',
            category: '',
            image: '',
            rating: {
                rate: 0,
                count: 0
            }
        }
    } else {
        nextProduct = await responseNext?.json();
    }
    
    return {
        props: {
            product: product,
            nextProduct: nextProduct,
            prevProduct: prevProduct,
        }
    };

};

export async function getStaticPaths(context: any) {
    const response = await fetch('https://fakestoreapi.com/products');
    const products: ProductType[] = await response.json();

    const paths = products.map((product: ProductType ) => ({
        params: { productId: (product.id).toString() }
    }));

    return {
        paths, fallback: false
    };
};

export default ProductDetailPage