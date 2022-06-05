import React from 'react'

import { getAllArticles, getAllArticlesLocal } from '../../helpers/articleHelpers';
import ArticleList from '@/components/articles/articleList/ArticleList';
import classes from './articlescss/articles.module.css';

import type { Article } from '../../lib/features/articles/types';

type Props = {}
// {allArticles}: {allArticles: Array<Article>;}
// : React.ReactElement
export default function Articles({articles}: {articles: Array<Article>;}): React.ReactElement {
  console.log("!!!!!!! all articles !!!!!!!!!!")
  console.log(articles)
  return (
    <div className={classes.articles_wrapper}>
      <ArticleList articles={articles}/>
      {/* {articles.map(article => (
        <li>{article.title}</li>
      ))} */}
    </div>  
  );
};


export async function getStaticProps() {
  const allArticles = await getAllArticles();
  console.log(allArticles)
  allArticles.forEach(article => console.log(article.title))
  console.log(typeof(allArticles))
  return {
    props: {
      articles: allArticles,
    },
  };
};