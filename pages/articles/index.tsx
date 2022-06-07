import React from 'react'

import { getAllArticles, getAllArticlesLocal } from '../../helpers/articleHelpers';
import { getAllArticlesTS } from '../../lib/features/articles/queries';
import ArticleList from '@/components/articles/articleList/ArticleList';
import classes from './articlescss/articles.module.css';

import type { Article } from '../../lib/features/articles/types';

type Props = {}

export default function Articles({articles}: {articles: Array<Article>;}): React.ReactElement {
  
  return (
    <div className={classes.articles_wrapper}>
      <ArticleList articles={articles}/>
    </div>  
  );
};


export async function getStaticProps() {
  // let uri;
  // if(process.env.NODE_ENV === 'development') {
  //   uri = '../../devArticles.ts' 
  // } else {
  //   uri = process.env.NEXT_PUBLIC_FIREBASE_URI;
  // }

  const allArticles = await getAllArticlesTS();
  console.log(allArticles)
  
  return {
    props: {
      articles: allArticles,
      fallback: true,
    },
  };
};